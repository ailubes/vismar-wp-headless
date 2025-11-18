'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownGroup {
  label: string;
  items: DropdownItem[];
}

interface DropdownProps {
  trigger: string;
  items?: DropdownItem[];
  groups?: DropdownGroup[];
  locale: string;
  className?: string;
}

export function Dropdown({ trigger, items, groups, locale, className = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fontClass = locale === 'en' ? 'font-poppins' : 'font-montserrat';

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-brand-primary transition-colors ${fontClass}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50 py-2 animate-fadeIn ${fontClass}`}>
          {/* Grouped items (for Services) */}
          {groups?.map((group, idx) => (
            <div key={idx} className="px-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {group.label}
              </div>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-primary rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {idx < groups.length - 1 && <div className="my-2 border-t border-gray-200" />}
            </div>
          ))}

          {/* Regular items */}
          {items?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-primary rounded-lg mx-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

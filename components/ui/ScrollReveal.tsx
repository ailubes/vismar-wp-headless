'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  disabled?: boolean;
}

/**
 * ScrollReveal Component
 *
 * A reusable animation component that triggers fade-in and slide-up animations
 * when the element becomes visible in the viewport using the Intersection Observer API.
 *
 * Features:
 * - SSR-safe (Next.js compatible)
 * - Configurable delay for staggered animations
 * - Triggers once (won't re-animate on scroll)
 * - Smooth cubic-bezier easing
 * - Performance optimized with will-change
 *
 * @param children - The content to animate
 * @param delay - Animation delay in milliseconds (default: 0)
 * @param className - Additional CSS classes
 * @param threshold - Percentage of element visibility to trigger (default: 0.1)
 * @param disabled - Disable animations (useful for testing or accessibility)
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
  disabled = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip if disabled or already animated
    if (disabled || hasAnimated) {
      if (disabled && !isVisible) {
        setIsVisible(true);
      }
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Trigger animation
            setIsVisible(true);
            setHasAnimated(true);

            // Unobserve after animation triggers (performance optimization)
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        // Trigger slightly before element enters viewport for smoother experience
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, disabled, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

/**
 * ScrollRevealGroup Component
 *
 * A convenience wrapper for animating multiple children with automatic staggered delays.
 *
 * @param children - Array of elements to animate
 * @param staggerDelay - Delay between each child animation in milliseconds (default: 100)
 * @param className - Additional CSS classes for the wrapper
 * @param threshold - Percentage of element visibility to trigger
 */
interface ScrollRevealGroupProps {
  children: ReactNode[];
  staggerDelay?: number;
  className?: string;
  threshold?: number;
  disabled?: boolean;
}

export function ScrollRevealGroup({
  children,
  staggerDelay = 100,
  className = '',
  threshold = 0.1,
  disabled = false,
}: ScrollRevealGroupProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal
          key={index}
          delay={index * staggerDelay}
          threshold={threshold}
          disabled={disabled}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

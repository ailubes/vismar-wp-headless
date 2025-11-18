'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface AnimatedCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  enableScrollAnimation?: boolean;
  className?: string;
}

/**
 * Animated Counter component for displaying stats and numbers
 * Counts up when scrolled into view with smooth animation
 * Supports prefixes, suffixes, and number formatting
 */
export const AnimatedCounter = React.forwardRef<HTMLSpanElement, AnimatedCounterProps>(
  (
    {
      end,
      start = 0,
      duration = 2000,
      decimals = 0,
      prefix = '',
      suffix = '',
      separator = ',',
      enableScrollAnimation = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const [count, setCount] = useState(start);
    const [isVisible, setIsVisible] = useState(!enableScrollAnimation);
    const counterRef = useRef<HTMLSpanElement>(null);
    const animationFrameRef = useRef<number>();

    // Format number with separators
    const formatNumber = (num: number): string => {
      const fixed = num.toFixed(decimals);
      const parts = fixed.split('.');

      // Add thousand separators
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);

      return parts.join('.');
    };

    // Easing function for smooth animation
    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    };

    // Intersection Observer for scroll-triggered animation
    useEffect(() => {
      if (!enableScrollAnimation) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px',
        }
      );

      const currentRef = counterRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [enableScrollAnimation, isVisible]);

    // Counter animation
    useEffect(() => {
      if (!isVisible) return;

      const startTime = Date.now();
      const startValue = start;
      const endValue = end;
      const change = endValue - startValue;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Apply easing
        const easedProgress = easeOutQuart(progress);
        const currentCount = startValue + change * easedProgress;

        setCount(currentCount);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isVisible, start, end, duration]);

    const baseStyles = `
      inline-block font-bold text-primary tabular-nums
    `;

    const combinedStyles = `
      ${baseStyles}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <span
        ref={(node) => {
          // Handle both refs
          if (counterRef && typeof counterRef === 'object' && 'current' in counterRef) {
            (counterRef as React.MutableRefObject<HTMLSpanElement | null>).current = node;
          }
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref && typeof ref === 'object' && 'current' in ref) {
            (ref as React.MutableRefObject<HTMLSpanElement | null>).current = node;
          }
        }}
        className={combinedStyles}
        aria-live="polite"
        aria-atomic="true"
        {...props}
      >
        {prefix}
        {formatNumber(count)}
        {suffix}
      </span>
    );
  }
);

AnimatedCounter.displayName = 'AnimatedCounter';

/**
 * StatCard - Card component specifically for displaying statistics with AnimatedCounter
 */
export interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  icon?: React.ReactNode;
  description?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  prefix,
  suffix,
  decimals,
  icon,
  description,
  className = '',
}) => {
  return (
    <div
      className={`
        bg-card p-6 rounded-lg shadow-custom-md
        hover:shadow-custom-lg transition-shadow duration-300
        ${className}
      `}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-1">
            <AnimatedCounter
              end={value}
              prefix={prefix}
              suffix={suffix}
              decimals={decimals}
            />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">{label}</p>
          {description && (
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        {icon && (
          <div className="text-primary/20 text-4xl ml-4" aria-hidden="true">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

StatCard.displayName = 'StatCard';

export default AnimatedCounter;

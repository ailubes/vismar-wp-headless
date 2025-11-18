import React from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  pill?: boolean;
  dot?: boolean;
}

/**
 * Badge component for labels, tags, and status indicators
 * Supports multiple color variants and sizes
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      pill = false,
      dot = false,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = `
      inline-flex items-center gap-1.5
      font-medium whitespace-nowrap
      transition-all duration-200
    `;

    // Variant styles
    const variantStyles: Record<BadgeVariant, string> = {
      primary: `
        bg-primary text-primary-foreground
        border border-primary
      `,
      secondary: `
        bg-secondary text-primary
        border border-primary/20
      `,
      success: `
        bg-green-100 text-green-800
        border border-green-200
        dark:bg-green-900/30 dark:text-green-400 dark:border-green-800
      `,
      warning: `
        bg-yellow-100 text-yellow-800
        border border-yellow-200
        dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800
      `,
      danger: `
        bg-red-100 text-red-800
        border border-red-200
        dark:bg-red-900/30 dark:text-red-400 dark:border-red-800
      `,
      info: `
        bg-blue-100 text-blue-800
        border border-blue-200
        dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800
      `,
    };

    // Size styles
    const sizeStyles: Record<BadgeSize, string> = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    };

    // Shape styles
    const shapeStyles = pill ? 'rounded-full' : 'rounded-md';

    // Dot indicator (optional)
    const DotIndicator = () => (
      <span
        className={`
          inline-block w-1.5 h-1.5 rounded-full
          ${variant === 'primary' ? 'bg-primary-foreground' : ''}
          ${variant === 'secondary' ? 'bg-primary' : ''}
          ${variant === 'success' ? 'bg-green-600' : ''}
          ${variant === 'warning' ? 'bg-yellow-600' : ''}
          ${variant === 'danger' ? 'bg-red-600' : ''}
          ${variant === 'info' ? 'bg-blue-600' : ''}
        `}
        aria-hidden="true"
      />
    );

    // Combine all styles
    const combinedStyles = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${shapeStyles}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <span ref={ref} className={combinedStyles} {...props}>
        {dot && <DotIndicator />}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

/**
 * BadgeGroup - Container for multiple badges with consistent spacing
 */
export interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BadgeGroup = React.forwardRef<HTMLDivElement, BadgeGroupProps>(
  ({ children, className = '', ...props }, ref) => {
    const styles = `
      flex flex-wrap items-center gap-2
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div ref={ref} className={styles} {...props}>
        {children}
      </div>
    );
  }
);

BadgeGroup.displayName = 'BadgeGroup';

export default Badge;

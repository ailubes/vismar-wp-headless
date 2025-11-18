import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  noPadding?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Modern Card component with optional header, body, and footer sections
 * Features white background, subtle shadow, and cyan accent on hover
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hoverable = true, noPadding = false, className = '', ...props }, ref) => {
    const baseStyles = `
      bg-card text-card-foreground
      rounded-lg overflow-hidden
      transition-all duration-300
      border border-transparent
    `;

    const shadowStyles = 'shadow-custom-md';

    const hoverStyles = hoverable
      ? `
        hover:shadow-custom-xl
        hover:border-primary/20
        hover:-translate-y-1
      `
      : '';

    const paddingStyles = noPadding ? '' : 'p-8 md:p-10';

    const combinedStyles = `
      ${baseStyles}
      ${shadowStyles}
      ${hoverStyles}
      ${paddingStyles}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div ref={ref} className={combinedStyles} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card Header section with consistent styling
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...props }, ref) => {
    const styles = `
      px-6 py-4
      border-b border-border
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div ref={ref} className={styles} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

/**
 * Card Body section with consistent padding
 */
export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className = '', ...props }, ref) => {
    const styles = `
      px-6 py-4
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div ref={ref} className={styles} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

/**
 * Card Footer section with top border
 */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...props }, ref) => {
    const styles = `
      px-6 py-4
      border-t border-border
      bg-muted/30
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div ref={ref} className={styles} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export default Card;

import React from 'react';

export type SectionBackground = 'white' | 'light' | 'gradient' | 'transparent';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: SectionBackground;
  containerized?: boolean;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  fullWidth?: boolean;
  as?: 'section' | 'div' | 'article' | 'aside';
}

/**
 * Page Section wrapper component with consistent padding and spacing
 * Supports multiple background variants and container max-width handling
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      background = 'transparent',
      containerized = true,
      spacing = 'lg',
      fullWidth = false,
      as: Component = 'section',
      className = '',
      ...props
    },
    ref
  ) => {
    // Background styles
    const backgroundStyles: Record<SectionBackground, string> = {
      white: 'bg-card',
      light: 'bg-secondary/30',
      gradient: 'bg-gradient-aqua text-white',
      transparent: 'bg-transparent',
    };

    // Spacing styles (vertical padding) - Tight, content-focused spacing
    const spacingStyles = {
      sm: 'py-5 md:py-8',
      md: 'py-8 md:py-10',
      lg: 'py-10 md:py-12',
      xl: 'py-12 md:py-16',
      '2xl': 'py-16 md:py-20',
    };

    // Container styles
    const containerStyles = containerized && !fullWidth
      ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      : '';

    const fullWidthStyles = fullWidth ? 'w-full' : '';

    // Combine styles
    const sectionStyles = `
      ${backgroundStyles[background]}
      ${spacingStyles[spacing]}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    const innerStyles = `
      ${containerStyles}
      ${fullWidthStyles}
    `.trim().replace(/\s+/g, ' ');

    return (
      <Component ref={ref as any} className={sectionStyles} {...props}>
        {containerized ? (
          <div className={innerStyles}>{children}</div>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Section.displayName = 'Section';

/**
 * SectionHeader - Consistent section header with title and optional description
 */
export interface SectionHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignStyles[align]} ${className}`}>
      {subtitle && (
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

SectionHeader.displayName = 'SectionHeader';

export default Section;

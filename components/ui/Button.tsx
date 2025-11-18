import React from 'react';

/**
 * Button variants based on Figma design system
 */
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'gradient' | 'accent';

/**
 * Button sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Base button props for native button element
 */
export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  as?: never;
  href?: never;
}

/**
 * Link button props for anchor element
 */
export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  as: 'a';
  href: string;
}

/**
 * Combined button props (polymorphic)
 */
export type ButtonProps = BaseButtonProps | LinkButtonProps;

/**
 * Reusable Button component based on Figma design system
 *
 * @description
 * A polymorphic button component that supports multiple variants, sizes, and can render
 * as either a button or anchor element for maximum flexibility.
 *
 * @features
 * - 4 variants: primary, secondary, tertiary, gradient
 * - 3 sizes: sm, md, lg
 * - Polymorphic (can be button or anchor)
 * - Loading state with spinner
 * - Full-width option
 * - Accessible with ARIA attributes
 * - Smooth transitions and hover states
 *
 * @example
 * ```tsx
 * // Button element
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 *
 * // Anchor element
 * <Button as="a" href="/about" variant="secondary">
 *   Learn more
 * </Button>
 *
 * // Loading state
 * <Button loading variant="gradient">
 *   Processing...
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      className = '',
      children,
      ...restProps
    } = props;

    // Base styles - shared across all variants
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-body font-medium
      rounded-lg
      transition-all duration-300 ease-in-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
      button-lift
    `.trim().replace(/\s+/g, ' ');

    // Variant styles based on Figma design system
    const variantStyles: Record<ButtonVariant, string> = {
      // Primary: Dark background (#020908), white text
      primary: `
        bg-neutral-darkest text-white
        hover:bg-opacity-90 hover:shadow-lg
        active:bg-opacity-95
      `.trim().replace(/\s+/g, ' '),

      // Secondary: Transparent background with border, white text
      secondary: `
        bg-white bg-opacity-10 text-white
        border border-white border-opacity-30
        hover:bg-opacity-20 hover:border-opacity-50
        active:bg-opacity-15
      `.trim().replace(/\s+/g, ' '),

      // Tertiary: Light background, dark text
      tertiary: `
        bg-neutral-darkest bg-opacity-5 text-neutral-darkest
        hover:bg-opacity-10
        active:bg-opacity-15
      `.trim().replace(/\s+/g, ' '),

      // Gradient: Linear gradient (104deg, #21BDA1 0%, #1895C0 100%), white text
      gradient: `
        bg-gradient-aqua text-white
        hover:opacity-90 hover:shadow-lg
        active:opacity-95
      `.trim().replace(/\s+/g, ' '),

      // Accent: Coral Orange (#FF6B35), white text for CTAs
      accent: `
        bg-brand-accent text-white
        hover:opacity-90 hover:shadow-lg
        active:opacity-95
      `.trim().replace(/\s+/g, ' '),
    };

    // Size styles based on requirements
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-sm px-4 py-2',      // 14px text, px-4 py-2
      md: 'text-base px-6 py-3',    // 16px text, px-6 py-3 (default)
      lg: 'text-lg px-8 py-4',      // 18px text, px-8 py-4
    };

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    // Loading spinner component
    const LoadingSpinner = () => (
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    // Combine all styles
    const combinedStyles = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${widthStyles}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    // Render as anchor element if 'as' prop is 'a'
    if (props.as === 'a') {
      const { as, variant: _, size: __, loading: ___, fullWidth: ____, ...anchorProps } = restProps as LinkButtonProps;

      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedStyles}
          aria-busy={loading}
          {...anchorProps}
        >
          {loading && <LoadingSpinner />}
          {loading ? <span className="opacity-70">{children}</span> : children}
        </a>
      );
    }

    // Render as button element (default)
    const { disabled, ...buttonProps } = restProps as BaseButtonProps;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedStyles}
        disabled={disabled || loading}
        aria-busy={loading}
        {...buttonProps}
      >
        {loading && <LoadingSpinner />}
        {loading ? <span className="opacity-70">{children}</span> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

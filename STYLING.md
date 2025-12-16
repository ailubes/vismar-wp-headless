@import "tailwindcss";

@theme {
  /* Vismar Aqua Brand Colors */
  --color-primary-50: #e6f7ff;
  --color-primary-100: #bae7ff;
  --color-primary-200: #91d5ff;
  --color-primary-300: #69c0ff;
  --color-primary-400: #40a9ff;
  --color-primary-500: #1890ff;
  --color-primary-600: #096dd9;
  --color-primary-700: #0050b3;
  --color-primary-800: #003a8c;
  --color-primary-900: #002766;

  --color-aqua-50: #e6fffb;
  --color-aqua-100: #b5f5ec;
  --color-aqua-200: #87e8de;
  --color-aqua-300: #5cdbd3;
  --color-aqua-400: #36cfc9;
  --color-aqua-500: #13c2c2;
  --color-aqua-600: #08979c;
  --color-aqua-700: #006d75;
  --color-aqua-800: #00474f;
  --color-aqua-900: #002329;

  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;

  /* Design System Colors (light mode) */
  --color-background: #f0f8ff;
  --color-foreground: #374151;
  --color-card: #ffffff;
  --color-card-foreground: #374151;
  --color-popover: #ffffff;
  --color-popover-foreground: #374151;
  --color-primary: #1ebbf0;
  --color-primary-foreground: #ffffff;
  --color-secondary: #e0f2fe;
  --color-secondary-foreground: #4b5563;
  --color-muted: #f3f4f6;
  --color-muted-foreground: #6b7280;
  --color-accent: #d1fae5;
  --color-accent-foreground: #374151;
  --color-destructive: #ef4444;
  --color-destructive-foreground: #ffffff;
  --color-border: #e5e7eb;
  --color-input: #e5e7eb;
  --color-ring: #22c55e;
  --color-chart-1: #22c55e;
  --color-chart-2: #10b981;
  --color-chart-3: #059669;
  --color-chart-4: #047857;
  --color-chart-5: #065f46;
  --color-sidebar: #e0f2fe;
  --color-sidebar-foreground: #374151;
  --color-sidebar-primary: #22c55e;
  --color-sidebar-primary-foreground: #ffffff;
  --color-sidebar-accent: #d1fae5;
  --color-sidebar-accent-foreground: #374151;
  --color-sidebar-border: #e5e7eb;
  --color-sidebar-ring: #22c55e;

  /* Font families */
  --font-family-sans: var(--font-inter), system-ui, sans-serif;
  --font-family-heading: var(--font-poppins), system-ui, sans-serif;
  --font-family-mono: ui-monospace, monospace;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;

  /* Shadows */
  --shadow-2xs: 0px 4px 8px -1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0px 4px 8px -1px rgb(0 0 0 / 0.05);
  --shadow-sm: 0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 1px 2px -2px rgb(0 0 0 / 0.10);
  --shadow: 0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 1px 2px -2px rgb(0 0 0 / 0.10);
  --shadow-md: 0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 2px 4px -2px rgb(0 0 0 / 0.10);
  --shadow-lg: 0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 4px 6px -2px rgb(0 0 0 / 0.10);
  --shadow-xl: 0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 8px 10px -2px rgb(0 0 0 / 0.10);
  --shadow-2xl: 0px 4px 8px -1px rgb(0 0 0 / 0.25);
}

/* Dark mode theme overrides */
@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: #0f172a;
    --color-foreground: #d1d5db;
    --color-card: #1e293b;
    --color-card-foreground: #d1d5db;
    --color-popover: #1e293b;
    --color-popover-foreground: #d1d5db;
    --color-primary: #34d399;
    --color-primary-foreground: #0f172a;
    --color-secondary: #2d3748;
    --color-secondary-foreground: #a1a1aa;
    --color-muted: #19212e;
    --color-muted-foreground: #6b7280;
    --color-accent: #374151;
    --color-accent-foreground: #a1a1aa;
    --color-destructive: #ef4444;
    --color-destructive-foreground: #0f172a;
    --color-border: #4b5563;
    --color-input: #4b5563;
    --color-ring: #34d399;
    --color-chart-1: #34d399;
    --color-chart-2: #2dd4bf;
    --color-chart-3: #22c55e;
    --color-chart-4: #10b981;
    --color-chart-5: #059669;
    --color-sidebar: #1e293b;
    --color-sidebar-foreground: #d1d5db;
    --color-sidebar-primary: #34d399;
    --color-sidebar-primary-foreground: #0f172a;
    --color-sidebar-accent: #374151;
    --color-sidebar-accent-foreground: #a1a1aa;
    --color-sidebar-border: #4b5563;
    --color-sidebar-ring: #34d399;
  }
}

/* Base styles */
html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--font-family-sans);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  font-family: var(--font-family-heading);
}

h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

h3 {
  font-size: 1.5rem;
  line-height: 2rem;
}

h4 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

h5 {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

h6 {
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (min-width: 768px) {
  h1 { font-size: 3rem; line-height: 1; }
  h2 { font-size: 2.25rem; line-height: 2.5rem; }
  h3 { font-size: 1.875rem; line-height: 2.25rem; }
  h4 { font-size: 1.5rem; line-height: 2rem; }
  h5 { font-size: 1.25rem; line-height: 1.75rem; }
  h6 { font-size: 1.125rem; line-height: 1.75rem; }
}

@media (min-width: 1024px) {
  h1 { font-size: 3.75rem; line-height: 1; }
  h2 { font-size: 3rem; line-height: 1; }
  h3 { font-size: 2.25rem; line-height: 2.5rem; }
  h4 { font-size: 1.875rem; line-height: 2.25rem; }
  h5 { font-size: 1.5rem; line-height: 2rem; }
  h6 { font-size: 1.25rem; line-height: 1.75rem; }
}

/* Button component styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--color-ring);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-primary:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--color-ring);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  background-color: var(--color-secondary);
  color: var(--color-secondary-foreground);
}

.btn-secondary:hover {
  opacity: 0.9;
}

.btn-secondary:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--color-ring);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  background-color: transparent;
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
}

.btn-outline:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--color-ring);
}

/* Container */
.container-custom {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Section spacing */
.section {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

@media (min-width: 768px) {
  .section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

@media (min-width: 1024px) {
  .section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

/* Card styles */
.card {
  background-color: var(--color-card);
  color: var(--color-card-foreground);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: box-shadow 0.2s;
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

/* WordPress content styles */
.wp-content {
  max-width: none;
}

.wp-content img {
  border-radius: 0.5rem;
}

.wp-content a {
  color: var(--color-primary);
  text-decoration: underline;
}

.wp-content a:hover {
  opacity: 0.8;
}

/* Utility classes */
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, var(--color-primary), var(--color-accent));
}

.bg-gradient-primary {
  background-image: linear-gradient(to bottom right, var(--color-primary), var(--color-secondary));
}

.bg-gradient-aqua {
  background-image: linear-gradient(to bottom right, #1ebbf0, #0ea5da);
}

/* Shadow utilities using design system */
.shadow-custom-sm {
  box-shadow: var(--shadow-sm);
}

.shadow-custom {
  box-shadow: var(--shadow);
}

.shadow-custom-md {
  box-shadow: var(--shadow-md);
}

.shadow-custom-lg {
  box-shadow: var(--shadow-lg);
}

.shadow-custom-xl {
  box-shadow: var(--shadow-xl);
}

.shadow-custom-2xl {
  box-shadow: var(--shadow-2xl);
}

/* Border radius utilities using design system */
.rounded-custom-sm {
  border-radius: var(--radius-sm);
}

.rounded-custom-md {
  border-radius: var(--radius-md);
}

.rounded-custom-lg {
  border-radius: var(--radius-lg);
}

.rounded-custom-xl {
  border-radius: var(--radius-xl);
}

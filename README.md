# Vismar Aqua Frontend - Next.js 14 Application

Modern, bilingual (EN/UA) headless WordPress frontend built with Next.js 14, TypeScript, Tailwind CSS, and next-intl.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **next-intl** - Internationalization (i18n) for EN/UA locales
- **Apollo Client** - GraphQL client for WordPress
- **Google Fonts** - Inter & Poppins fonts

## Project Structure

```
frontend/
├── app/
│   ├── [locale]/              # Locale-based routing
│   │   ├── layout.tsx         # Root layout with i18n
│   │   ├── page.tsx           # Homepage
│   │   └── not-found.tsx      # 404 page
│   └── globals.css            # Global styles with Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Site header with navigation
│   │   ├── Footer.tsx         # Site footer
│   │   └── LanguageSwitcher.tsx
│   └── ui/                    # Reusable UI components
├── lib/
│   ├── wordpress/
│   │   ├── client.ts          # Apollo Client setup
│   │   ├── queries.ts         # GraphQL queries
│   │   └── types.ts           # TypeScript types
│   └── i18n.ts                # next-intl configuration
├── messages/
│   ├── en.json                # English translations
│   └── ua.json                # Ukrainian translations
├── public/
│   └── images/                # Static images
├── middleware.ts              # next-intl middleware
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 20+ and npm 10+
- WordPress with WPGraphQL plugin (for backend)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local`:
   ```env
   WORDPRESS_API_URL=http://wordpress/graphql  # For Docker
   # WORDPRESS_API_URL=http://localhost:8080/graphql  # For local dev
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically redirect to `/en` or `/ua` based on your locale preference.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Building for Production

```bash
npm run build
npm start
```

## Internationalization (i18n)

The app supports two locales:

- **English (en)** - Default locale
- **Ukrainian (ua)** - Secondary locale

Routes are automatically prefixed with the locale:
- `/en` - English homepage
- `/ua` - Ukrainian homepage

Users can switch languages using the language switcher in the header.

### Adding Translations

Edit `messages/en.json` and `messages/ua.json` to add or modify translations.

## WordPress Integration

The app connects to WordPress via GraphQL using Apollo Client.

### Configuration

- GraphQL endpoint: Set via `WORDPRESS_API_URL` environment variable
- Client: `/lib/wordpress/client.ts`
- Queries: `/lib/wordpress/queries.ts`
- Types: `/lib/wordpress/types.ts`

### Required WordPress Plugins

- **WPGraphQL** - GraphQL API for WordPress
- **WPGraphQL for SEO** (optional) - SEO metadata support

## Styling

### Tailwind CSS

The project uses Tailwind CSS with a custom theme featuring Vismar Aqua brand colors:

- **Primary Blue**: `primary-500` (#1890ff)
- **Aqua Accent**: `aqua-500` (#13c2c2)
- **Neutral Grays**: `neutral-*`

### Custom Components

Reusable CSS classes are defined in `app/globals.css`:

- `.btn`, `.btn-primary`, `.btn-secondary` - Button styles
- `.container-custom` - Container with responsive padding
- `.section` - Section spacing
- `.card` - Card component
- `.wp-content` - WordPress content styles

## Fonts

- **Inter** - Body text (Latin + Cyrillic)
- **Poppins** - Headings

Fonts are loaded from Google Fonts and optimized by Next.js.

## Docker Support

The app is configured for Docker deployment:

```bash
# From project root
docker-compose up frontend
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `WORDPRESS_API_URL` | WordPress GraphQL endpoint | `http://wordpress/graphql` |
| `NEXT_PUBLIC_SITE_URL` | Site URL for revalidation | `http://localhost:3000` |

## Type Safety

The project uses TypeScript in strict mode with:

- Path aliases (`@/components`, `@/lib`, etc.)
- Type-safe GraphQL responses
- Type-safe i18n translations

## Performance

- Static Site Generation (SSG) for all pages
- Optimized images with Next.js Image component
- Font optimization with next/font
- Automatic code splitting

## Browser Support

Modern browsers with ES6+ support:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

1. Follow the existing code style
2. Use TypeScript for all new files
3. Add translations for both EN and UA
4. Test in both locales before committing

## License

All rights reserved - Vismar Aqua

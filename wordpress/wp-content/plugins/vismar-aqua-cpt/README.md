# Vismar Aqua Custom Post Types

Custom post types plugin for Vismar Aqua headless WordPress site.

## Overview

This plugin registers four custom post types for the Vismar Aqua website:
- **Services** - Aquaculture engineering services
- **Projects** - Client project case studies
- **Software** - Software solutions and tools
- **Species** - Aquaculture species information

## Features

- **GraphQL Support**: All CPTs are exposed via WPGraphQL for headless architecture
- **REST API Support**: Full REST API support with Gutenberg editor
- **Polylang Compatible**: All CPTs are translatable (English/Norwegian)
- **SEO Friendly**: Clean URL structures and archive pages
- **Admin UI**: Complete admin labels and dashicons for easy management

## Custom Post Types

### Services
- **Slug**: `service`
- **URL**: `/services/[slug]`
- **GraphQL Names**: `Service` (singular), `Services` (plural)
- **Icon**: dashicons-hammer
- **Supports**: Title, Editor, Thumbnail, Excerpt, Custom Fields

### Projects
- **Slug**: `project`
- **URL**: `/projects/[slug]`
- **GraphQL Names**: `Project` (singular), `Projects` (plural)
- **Icon**: dashicons-portfolio
- **Supports**: Title, Editor, Thumbnail, Excerpt, Custom Fields

### Software
- **Slug**: `software`
- **URL**: `/software/[slug]`
- **GraphQL Names**: `Software` (singular), `SoftwareSolutions` (plural)
- **Icon**: dashicons-laptop
- **Supports**: Title, Editor, Thumbnail, Excerpt, Custom Fields

### Species
- **Slug**: `species`
- **URL**: `/species/[slug]`
- **GraphQL Names**: `Species` (singular), `SpeciesTypes` (plural)
- **Icon**: dashicons-pets
- **Supports**: Title, Editor, Thumbnail, Excerpt, Custom Fields

## Installation

1. Upload the `vismar-aqua-cpt` folder to `/wp-content/plugins/`
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Rewrite rules will be flushed automatically on activation

## Usage

### Creating Content

After activation, you'll see four new menu items in the WordPress admin:
- Services
- Projects
- Software
- Species

Each menu item allows you to create and manage content for that post type.

### GraphQL Queries

Query services:
```graphql
query GetServices {
  services {
    nodes {
      id
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
```

Query projects:
```graphql
query GetProjects {
  projects {
    nodes {
      id
      title
      excerpt
    }
  }
}
```

Query software:
```graphql
query GetSoftware {
  softwareSolutions {
    nodes {
      id
      title
      excerpt
    }
  }
}
```

Query species:
```graphql
query GetSpecies {
  speciesTypes {
    nodes {
      id
      title
      excerpt
    }
  }
}
```

## File Structure

```
vismar-aqua-cpt/
├── vismar-aqua-cpt.php          # Main plugin file
├── includes/
│   ├── post-type-services.php   # Services CPT registration
│   ├── post-type-projects.php   # Projects CPT registration
│   ├── post-type-software.php   # Software CPT registration
│   └── post-type-species.php    # Species CPT registration
└── README.md                     # This file
```

## Requirements

- WordPress 5.0 or higher
- WPGraphQL plugin (for GraphQL functionality)
- Polylang plugin (for multilingual support)

## Changelog

### 1.0.0
- Initial release
- Added Services custom post type
- Added Projects custom post type
- Added Software custom post type
- Added Species custom post type
- GraphQL support for all CPTs
- Polylang compatibility

## Author

Vismar Aqua - https://vismar.no

## License

GPL v2 or later

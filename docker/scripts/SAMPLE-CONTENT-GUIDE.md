# Sample Content Creation Guide

## Overview

This guide covers the sample content created for Vismar Aqua WordPress backend.

## Script Location

- **Main Script**: `/mnt/g/www/vismar-aqua-wp-headless/docker/scripts/create-sample-content.php`
- **WordPress Volume**: `/mnt/g/www/vismar-aqua-wp-headless/wordpress/wp-content/scripts/create-sample-content.php`

## Running the Script

To create or recreate sample content:

```bash
docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/create-sample-content.php
```

## Content Created

### 1. Pages (16 total - 8 pairs EN/UK)

| English Title | Ukrainian Title | Slug | Purpose |
|--------------|-----------------|------|---------|
| Home | Головна | home | Front page |
| About | Про нас | about | About company |
| Services | Послуги | services | Services overview |
| Projects | Проєкти | projects | Projects showcase |
| Software | Програмне забезпечення | software | Software solutions |
| Species | Види | species | Fish species info |
| Contact | Контакти | contact | Contact form |
| Privacy Policy | Політика конфіденційності | privacy | Privacy policy |

**Key IDs:**
- Home (EN): ID 8
- Home (UK): ID 9

### 2. Services (8 total - 4 pairs EN/UK)

1. **RAS Systems Design** / Проектування систем RAS (IDs: 24, 25)
2. **Hatchery Design** / Проектування інкубаторіїв (IDs: 26, 27)
3. **Water Treatment** / Водоочистка (IDs: 28, 29)
4. **Turnkey Solutions** / Рішення під ключ (IDs: 30, 31)

**ACF Fields Populated:**
- tagline
- icon
- description
- features
- benefits
- cta_text
- cta_link

### 3. Projects (4 total - 2 pairs EN/UK)

1. **Neusatz Aqua Fish Farm** / Рибна ферма Neusatz Aqua (IDs: 32, 33) - FEATURED
2. **Alpine Trout Farm** / Альпійська форелева ферма (IDs: 34, 35)

**ACF Fields Populated:**
- client
- location
- year
- size
- challenge
- solution
- results
- featured (boolean)

### 4. Software Solutions (4 total - 2 pairs EN/UK)

1. **AI Fish Counting** / AI підрахунок риби (IDs: 36, 37)
2. **AquaMonitor Pro** (IDs: 38, 39)

**ACF Fields Populated:**
- tagline
- icon
- description
- features
- benefits
- technology_stack
- demo_url
- documentation_url

### 5. Species (4 total - 2 pairs EN/UK)

1. **Rainbow Trout** / Райдужна форель (IDs: 40, 41)
2. **Nile Tilapia** / Нільська тиляпія (IDs: 42, 43)

**ACF Fields Populated:**
- scientific_name
- common_names
- optimal_temperature
- optimal_ph
- optimal_oxygen
- growth_rate
- market_size
- feed_conversion
- stocking_density
- description
- advantages
- challenges

### 6. Menus (2 total)

- **Main Menu EN** (ID: 28) - 8 items
- **Main Menu UK** (ID: 29) - 8 items

Both menus include all 8 pages in proper order.

## Viewing Content

### WordPress Admin

1. **Pages**: http://localhost:8080/wp-admin/edit.php?post_type=page
2. **Services**: http://localhost:8080/wp-admin/edit.php?post_type=service
3. **Projects**: http://localhost:8080/wp-admin/edit.php?post_type=project
4. **Software**: http://localhost:8080/wp-admin/edit.php?post_type=software
5. **Species**: http://localhost:8080/wp-admin/edit.php?post_type=species
6. **Menus**: http://localhost:8080/wp-admin/nav-menus.php

### GraphQL Endpoint

Access GraphQL IDE at: http://localhost:8080/graphql

## GraphQL Query Examples

### 1. Fetch All Pages (Both Languages)

```graphql
query GetAllPages {
  pages(first: 100) {
    nodes {
      id
      databaseId
      title
      slug
      content
      language {
        code
        name
      }
      translations {
        code
        title
        slug
        uri
      }
    }
  }
}
```

### 2. Fetch Services with ACF Fields

```graphql
query GetServices($language: LanguageCodeFilterEnum!) {
  services(where: { language: $language }, first: 10) {
    nodes {
      id
      databaseId
      title
      content
      slug
      language {
        code
      }
      serviceFields {
        tagline
        icon
        description
        features
        benefits
        ctaText
        ctaLink
      }
      translations {
        code
        title
        uri
      }
    }
  }
}
```

**Variables:**
```json
{
  "language": "EN"
}
```

### 3. Fetch Featured Projects

```graphql
query GetFeaturedProjects($language: LanguageCodeFilterEnum!) {
  projects(
    where: {
      language: $language,
      metaQuery: {
        key: "featured",
        value: "1",
        compare: EQUAL_TO
      }
    }
  ) {
    nodes {
      id
      databaseId
      title
      content
      projectFields {
        client
        location
        year
        size
        challenge
        solution
        results
        featured
      }
    }
  }
}
```

### 4. Fetch All Software Solutions

```graphql
query GetSoftware($language: LanguageCodeFilterEnum!) {
  allSoftware(where: { language: $language }) {
    nodes {
      id
      title
      content
      softwareFields {
        tagline
        icon
        description
        features
        benefits
        technologyStack
        demoUrl
        documentationUrl
      }
    }
  }
}
```

### 5. Fetch Species with Details

```graphql
query GetSpecies($language: LanguageCodeFilterEnum!) {
  allSpecies(where: { language: $language }) {
    nodes {
      id
      title
      content
      speciesFields {
        scientificName
        commonNames
        optimalTemperature
        optimalPh
        optimalOxygen
        growthRate
        marketSize
        feedConversion
        stockingDensity
        description
        advantages
        challenges
      }
    }
  }
}
```

### 6. Fetch Menu by Language

```graphql
query GetMenu($location: MenuLocationEnum!) {
  menu(idType: LOCATION, id: $location) {
    id
    name
    menuItems {
      nodes {
        id
        label
        url
        path
        target
        cssClasses
        parentId
        connectedNode {
          node {
            ... on Page {
              id
              title
              slug
              language {
                code
              }
            }
          }
        }
      }
    }
  }
}
```

### 7. Get Home Page Content

```graphql
query GetHomePage($language: LanguageCodeFilterEnum!) {
  pageBy(uri: "/", language: $language) {
    id
    title
    content
    language {
      code
      name
    }
    translations {
      code
      title
      uri
    }
  }
}
```

### 8. Search Content Across Types

```graphql
query SearchContent($search: String!, $language: LanguageCodeFilterEnum!) {
  contentNodes(
    where: {
      search: $search,
      language: $language
    }
    first: 20
  ) {
    nodes {
      ... on Page {
        id
        title
        uri
        contentType {
          node {
            name
          }
        }
      }
      ... on Service {
        id
        title
        uri
        serviceFields {
          tagline
        }
      }
      ... on Project {
        id
        title
        uri
        projectFields {
          client
          location
        }
      }
    }
  }
}
```

## Language Switching

All content is properly linked with Polylang translations. To fetch content in a specific language:

**English:**
```graphql
query {
  pages(where: { language: EN }) {
    nodes {
      title
    }
  }
}
```

**Ukrainian:**
```graphql
query {
  pages(where: { language: UK }) {
    nodes {
      title
    }
  }
}
```

## Next Steps

1. **Test GraphQL Queries**: Use GraphQL IDE at http://localhost:8080/graphql
2. **Verify Translations**: Check that all content pairs are properly linked
3. **Check ACF Fields**: Ensure all custom fields are populated
4. **Test Menu Structure**: Verify menu items are linked correctly
5. **Frontend Integration**: Use these queries in Next.js frontend

## Troubleshooting

### If content is not showing in GraphQL:

1. **Regenerate GraphQL Schema:**
   ```bash
   docker exec vismar-wordpress wp graphql update-schema --allow-root
   ```

2. **Check WPGraphQL Settings:**
   - Go to: http://localhost:8080/wp-admin/admin.php?page=graphql-settings
   - Ensure all post types are exposed to GraphQL

3. **Verify Polylang Integration:**
   - Check: http://localhost:8080/wp-admin/admin.php?page=mlang
   - Ensure EN and UK languages are active

### If ACF fields are not showing:

1. **Check ACF Field Groups:**
   - Go to: http://localhost:8080/wp-admin/edit.php?post_type=acf-field-group
   - Verify field groups are assigned to correct post types

2. **Regenerate ACF-WPGraphQL:**
   - Go to WPGraphQL settings
   - Check "Expose ACF Fields to GraphQL" option

## Rerunning the Script

The script is idempotent-safe. Running it multiple times will:
- Create duplicate content (WordPress doesn't prevent this)
- Create new menu items (may duplicate)

To clean up before rerunning:
1. Delete all pages, services, projects, software, species
2. Delete menus
3. Run script again

Or use WP-CLI:
```bash
# Delete all pages
docker exec vismar-wordpress wp post delete $(docker exec vismar-wordpress wp post list --post_type=page --format=ids --allow-root) --allow-root

# Delete all services
docker exec vismar-wordpress wp post delete $(docker exec vismar-wordpress wp post list --post_type=service --format=ids --allow-root) --allow-root
```

## Support

For issues or questions:
1. Check WordPress error logs: `docker logs vismar-wordpress`
2. Check GraphQL query errors in GraphQL IDE
3. Verify ACF field names match GraphQL schema

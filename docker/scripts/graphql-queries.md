# GraphQL Query Examples for Vismar Aqua

Access the GraphQL IDE at: http://localhost:8080/graphql

## Quick Test Query

```graphql
query TestQuery {
  generalSettings {
    title
    description
    language
  }
}
```

## 1. Get All Pages with Translations

```graphql
query GetAllPages {
  pages(first: 100, where: {language: EN}) {
    nodes {
      id
      databaseId
      title
      slug
      uri
      content
      date
      modified
      language {
        code
        name
        locale
      }
      translations {
        code
        name
        locale
        id
        uri
      }
    }
  }
}
```

## 2. Get Single Page by Slug

```graphql
query GetPageBySlug($slug: ID!, $language: LanguageCodeFilterEnum) {
  page(id: $slug, idType: URI) {
    id
    title
    content
    slug
    uri
    language {
      code
      name
    }
    translations {
      code
      uri
      title
    }
  }
}
```

Variables:
```json
{
  "slug": "/en/about/",
  "language": "EN"
}
```

## 3. Get All Services with ACF Fields

```graphql
query GetServices {
  services(first: 100, where: {language: EN}) {
    nodes {
      id
      databaseId
      title
      content
      slug
      uri
      excerpt
      date
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
        uri
        title
      }
    }
  }
}
```

## 4. Get Single Service by ID

```graphql
query GetServiceById($id: ID!) {
  service(id: $id, idType: DATABASE_ID) {
    id
    title
    content
    serviceFields {
      tagline
      icon
      description
      features
      benefits
      ctaText
      ctaLink
    }
    language {
      code
    }
    translations {
      code
      uri
      title
    }
  }
}
```

Variables:
```json
{
  "id": "24"
}
```

## 5. Get All Projects

```graphql
query GetProjects {
  projects(first: 100, where: {language: EN}) {
    nodes {
      id
      databaseId
      title
      content
      slug
      uri
      date
      language {
        code
      }
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
      translations {
        code
        uri
        title
      }
    }
  }
}
```

## 6. Get Featured Projects Only

```graphql
query GetFeaturedProjects {
  projects(
    first: 100
    where: {
      language: EN
      metaQuery: {
        metaArray: [
          {
            key: "featured"
            value: "1"
            compare: EQUAL_TO
          }
        ]
      }
    }
  ) {
    nodes {
      id
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

## 7. Get All Software Solutions

```graphql
query GetSoftware {
  allSoftware(first: 100, where: {language: EN}) {
    nodes {
      id
      databaseId
      title
      content
      slug
      uri
      language {
        code
      }
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
      translations {
        code
        uri
        title
      }
    }
  }
}
```

## 8. Get All Species

```graphql
query GetSpecies {
  allSpecies(first: 100, where: {language: EN}) {
    nodes {
      id
      databaseId
      title
      content
      slug
      uri
      language {
        code
      }
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
      translations {
        code
        uri
        title
      }
    }
  }
}
```

## 9. Get Single Species by Slug

```graphql
query GetSpeciesBySlug($slug: String!) {
  speciesBySlug(slug: $slug) {
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
    language {
      code
    }
    translations {
      code
      uri
      title
    }
  }
}
```

Variables:
```json
{
  "slug": "rainbow-trout"
}
```

## 10. Get Navigation Menu

```graphql
query GetMenu($location: MenuLocationEnum) {
  menu(id: "Main Menu EN", idType: NAME) {
    id
    name
    menuItems(first: 100) {
      nodes {
        id
        label
        url
        path
        target
        cssClasses
        description
        parentId
        order
        connectedNode {
          node {
            ... on Page {
              id
              title
              slug
              uri
            }
          }
        }
      }
    }
  }
}
```

## 11. Search Across All Content Types

```graphql
query SearchContent($searchTerm: String!) {
  contentNodes(
    where: {
      search: $searchTerm
      contentTypes: [PAGE, SERVICE, PROJECT, SOFTWARE, SPECIES]
    }
    first: 20
  ) {
    nodes {
      __typename
      ... on Page {
        id
        title
        uri
        excerpt
        date
      }
      ... on Service {
        id
        title
        uri
        excerpt
        date
        serviceFields {
          tagline
        }
      }
      ... on Project {
        id
        title
        uri
        excerpt
        date
        projectFields {
          client
          location
        }
      }
      ... on Software {
        id
        title
        uri
        excerpt
        date
        softwareFields {
          tagline
        }
      }
      ... on Species {
        id
        title
        uri
        excerpt
        date
        speciesFields {
          scientificName
        }
      }
    }
  }
}
```

Variables:
```json
{
  "searchTerm": "aqua"
}
```

## 12. Get Homepage with Translations

```graphql
query GetHomepage {
  page(id: "home", idType: URI) {
    id
    databaseId
    title
    content
    uri
    language {
      code
      name
      locale
    }
    translations {
      code
      name
      locale
      uri
      title
    }
  }
}
```

## 13. Get All Content for a Language

```graphql
query GetAllContentForLanguage($lang: LanguageCodeFilterEnum!) {
  pages(where: {language: $lang}, first: 100) {
    nodes {
      id
      title
      uri
    }
  }
  services(where: {language: $lang}, first: 100) {
    nodes {
      id
      title
      uri
      serviceFields {
        tagline
      }
    }
  }
  projects(where: {language: $lang}, first: 100) {
    nodes {
      id
      title
      uri
      projectFields {
        client
        featured
      }
    }
  }
  allSoftware(where: {language: $lang}, first: 100) {
    nodes {
      id
      title
      uri
      softwareFields {
        tagline
      }
    }
  }
  allSpecies(where: {language: $lang}, first: 100) {
    nodes {
      id
      title
      uri
      speciesFields {
        scientificName
      }
    }
  }
}
```

Variables:
```json
{
  "lang": "EN"
}
```

Or for Ukrainian:
```json
{
  "lang": "UK"
}
```

## 14. Get Recent Content (All Types)

```graphql
query GetRecentContent {
  contentNodes(
    where: {
      contentTypes: [SERVICE, PROJECT, SOFTWARE, SPECIES]
      orderby: {field: DATE, order: DESC}
    }
    first: 10
  ) {
    nodes {
      __typename
      ... on NodeWithTitle {
        title
      }
      ... on ContentNode {
        date
        uri
      }
      ... on Service {
        serviceFields {
          tagline
        }
      }
      ... on Project {
        projectFields {
          client
          year
        }
      }
    }
  }
}
```

## 15. Get Settings and Options

```graphql
query GetSiteSettings {
  generalSettings {
    title
    description
    url
    language
    dateFormat
    timeFormat
  }
  allSettings {
    generalSettingsTitle
    generalSettingsDescription
    generalSettingsUrl
    readingSettingsPostsPerPage
  }
}
```

## Testing in Frontend (Next.js)

Example using Apollo Client:

```typescript
import { gql } from '@apollo/client';

const GET_SERVICES = gql`
  query GetServices($language: LanguageCodeFilterEnum!) {
    services(where: { language: $language }, first: 100) {
      nodes {
        id
        title
        content
        uri
        serviceFields {
          tagline
          icon
          description
          features
          benefits
          ctaText
          ctaLink
        }
      }
    }
  }
`;

// Use in component
const { data, loading, error } = useQuery(GET_SERVICES, {
  variables: { language: 'EN' }
});
```

## Troubleshooting

### If queries don't work:

1. **Check GraphQL Schema is up to date:**
   - Visit: http://localhost:8080/wp-admin/admin.php?page=graphql-settings
   - Look for "Refresh Schema" or similar option

2. **Verify post types are exposed:**
   - Go to: http://localhost:8080/wp-admin/edit.php?post_type=[your-post-type]
   - Check "Show in GraphQL" option

3. **Check ACF fields are exposed:**
   - Go to ACF Field Groups
   - Ensure "Show in GraphQL" is checked for each field group

4. **Test basic query first:**
   ```graphql
   query {
     generalSettings {
       title
     }
   }
   ```

5. **Check for plugin conflicts:**
   - Disable other plugins temporarily
   - Test queries again

## Key Post IDs for Reference

- **Home Page (EN)**: 8
- **Home Page (UK)**: 9
- **RAS Systems Service (EN)**: 24
- **RAS Systems Service (UK)**: 25
- **Neusatz Aqua Project (EN)**: 32 (Featured)
- **Neusatz Aqua Project (UK)**: 33 (Featured)
- **AI Fish Counting (EN)**: 36
- **AI Fish Counting (UK)**: 37
- **Rainbow Trout (EN)**: 40
- **Rainbow Trout (UK)**: 41

## Notes

- All content is bilingual (EN/UK)
- All translations are properly linked via Polylang
- ACF fields are populated with realistic data
- Use `language` parameter to filter by language
- Use `translations` field to get all language versions

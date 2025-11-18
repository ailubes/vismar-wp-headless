import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Get WordPress GraphQL endpoint from environment or use default
const WORDPRESS_GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || process.env.WORDPRESS_API_URL;
const WORDPRESS_API_URL = WORDPRESS_GRAPHQL_URL
  ? (WORDPRESS_GRAPHQL_URL.includes('/graphql') ? WORDPRESS_GRAPHQL_URL : `${WORDPRESS_GRAPHQL_URL}/graphql`)
  : 'http://wordpress/graphql';

// DEVELOPMENT MODE: Caching disabled to avoid stale data issues with ACF field structure changes
// In production, consider re-enabling cache-first fetchPolicy and force-cache for static generation

// Create HTTP link
const httpLink = new HttpLink({
  uri: WORDPRESS_API_URL,
  fetchOptions: {
    cache: 'no-cache', // Disable caching for development to avoid stale data
  },
});

// Create Apollo Client instance
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      // ACF field groups for projects - no IDs needed
      ProjectDetails: { keyFields: false },
      TechnicalSpecifications: { keyFields: false },
      ProjectContentSections: { keyFields: false },
      EngineeringDetails: { keyFields: false },
      Media: { keyFields: false },
      ProjectTimeline: { keyFields: false },
      EngineeringChallenges: { keyFields: false },
      ProjectDeliverables: { keyFields: false },
      EnvironmentalImpact: { keyFields: false },
      PerformanceMetrics: { keyFields: false },
      FinancialPerformance: { keyFields: false },

      // Keep existing ones for other CPTs
      ServiceDetails: { keyFields: false },
      SpeciesDetails: { keyFields: false },
      SoftwareDetails: { keyFields: false },
    },
  }),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache', // Disable caching for development to avoid stale data
      errorPolicy: 'all',
    },
  },
  ssrMode: typeof window === 'undefined', // Enable SSR mode on server
});

// Helper function to create a client for Server Components
export function getClient() {
  return apolloClient;
}

// Simple test script to verify GraphQL connection
const { ApolloClient, InMemoryCache, HttpLink, gql } = require('@apollo/client');

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost:8080/graphql';

console.log('Testing GraphQL connection to:', WORDPRESS_API_URL);

const httpLink = new HttpLink({
  uri: WORDPRESS_API_URL,
  fetch: require('cross-fetch'),
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const GET_SITE_SETTINGS = gql`
  query GetSiteSettings {
    generalSettings {
      title
      description
      language
      url
    }
  }
`;

async function testConnection() {
  try {
    console.log('\n--- Testing WordPress GraphQL Connection ---\n');

    const { data, errors } = await client.query({
      query: GET_SITE_SETTINGS,
    });

    if (errors) {
      console.error('GraphQL Errors:', errors);
      process.exit(1);
    }

    console.log('SUCCESS! Connected to WordPress GraphQL API\n');
    console.log('Site Settings:');
    console.log('  Title:', data.generalSettings.title);
    console.log('  Description:', data.generalSettings.description);
    console.log('  Language:', data.generalSettings.language);
    console.log('  URL:', data.generalSettings.url);
    console.log('\n--- Test Complete ---\n');

    process.exit(0);
  } catch (error) {
    console.error('ERROR: Failed to connect to WordPress GraphQL API');
    console.error('Error:', error.message);
    console.error('\nPlease ensure:');
    console.error('1. WordPress is running');
    console.error('2. WPGraphQL plugin is activated');
    console.error('3. WORDPRESS_API_URL is correct in .env.local');
    process.exit(1);
  }
}

testConnection();

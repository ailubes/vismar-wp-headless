/**
 * Script to check what project fields are available in WordPress GraphQL
 */

const { ApolloClient, InMemoryCache, HttpLink, gql } = require('@apollo/client');
const fetch = require('cross-fetch');

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost:8080/graphql';

console.log('WordPress API URL:', WORDPRESS_API_URL);

const httpLink = new HttpLink({
  uri: WORDPRESS_API_URL,
  fetch,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Introspection query to get field information
const INTROSPECTION_QUERY = gql`
  query IntrospectionQuery {
    __type(name: "TechnicalSpecifications") {
      name
      fields {
        name
        type {
          name
          kind
        }
      }
    }
  }
`;

async function checkSchema() {
  try {
    console.log('\n=== Checking TechnicalSpecifications Fields ===\n');

    const { data, errors } = await client.query({
      query: INTROSPECTION_QUERY,
    });

    if (errors) {
      console.error('GraphQL Errors:', errors);
      process.exit(1);
    }

    if (data?.__type) {
      console.log('Available fields in TechnicalSpecifications:');
      data.__type.fields.forEach(field => {
        console.log(`  - ${field.name} (${field.type.kind}: ${field.type.name || 'complex'})`);
      });
    } else {
      console.log('TechnicalSpecifications type not found. Checking if Project type exists...');

      const PROJECT_CHECK = gql`
        query CheckProject {
          __type(name: "Project") {
            name
            fields {
              name
              type {
                name
                kind
              }
            }
          }
        }
      `;

      const result = await client.query({ query: PROJECT_CHECK });
      if (result.data?.__type) {
        console.log('\nAvailable fields in Project:');
        result.data.__type.fields.forEach(field => {
          console.log(`  - ${field.name} (${field.type.kind}: ${field.type.name || 'complex'})`);
        });
      }
    }

    process.exit(0);
  } catch (error) {
    console.error('ERROR:', error.message);
    process.exit(1);
  }
}

checkSchema();

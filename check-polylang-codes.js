const { ApolloClient, InMemoryCache, HttpLink, gql } = require('@apollo/client');
require('cross-fetch/polyfill');

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8080/graphql' }),
  cache: new InMemoryCache(),
});

const QUERY = gql`
  query {
    languages {
      code
      name
      locale
    }
  }
`;

async function test() {
  try {
    const result = await client.query({ query: QUERY });
    console.log('Available languages in WordPress/Polylang:');
    console.log(JSON.stringify(result.data, null, 2));
  } catch (error) {
    console.error('Query failed:', error.message);
    console.log('\nTrying alternative query...');

    // Try getting language info from posts
    const ALT_QUERY = gql`
      query {
        posts(first: 10) {
          nodes {
            language {
              code
              name
              locale
            }
          }
        }
      }
    `;

    const altResult = await client.query({ query: ALT_QUERY });
    const languages = {};
    altResult.data.posts.nodes.forEach(post => {
      if (post.language) {
        const code = post.language.code;
        if (!languages[code]) {
          languages[code] = post.language;
        }
      }
    });

    console.log('Languages found in posts:');
    console.log(JSON.stringify(languages, null, 2));
  }
}

test().catch(console.error);

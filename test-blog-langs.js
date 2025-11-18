const { ApolloClient, InMemoryCache, HttpLink, gql } = require('@apollo/client');
require('cross-fetch/polyfill');

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8080/graphql' }),
  cache: new InMemoryCache(),
});

const QUERY = gql`
  query {
    posts(first: 100, where: { status: PUBLISH }) {
      nodes {
        id
        title
        slug
        language {
          code
          name
        }
      }
    }
  }
`;

async function test() {
  const result = await client.query({ query: QUERY });
  const posts = result.data.posts.nodes;

  // Group by language
  const byLang = {};
  posts.forEach(post => {
    const lang = post.language?.code || 'NO_LANG';
    if (!byLang[lang]) byLang[lang] = [];
    byLang[lang].push({ title: post.title, slug: post.slug });
  });

  console.log('Posts by language:');
  Object.keys(byLang).forEach(lang => {
    console.log('\n' + lang + ' (' + byLang[lang].length + ' posts):');
    byLang[lang].slice(0, 3).forEach(p => {
      console.log('  - ' + p.title.substring(0, 60) + '...');
    });
  });
}

test().catch(console.error);

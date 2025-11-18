const http = require('http');

const query = `
  query {
    __type(name: "Project") {
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

const postData = JSON.stringify({ query });

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/graphql',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const response = JSON.parse(data);
    const fields = response.data.__type.fields;
    console.log('Available fields on Project type:');
    fields.forEach(field => {
      console.log(`- ${field.name} (${field.type.name || field.type.kind})`);
    });
  });
});

req.write(postData);
req.end();

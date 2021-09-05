/* eslint-disable */
require('dotenv').config();

module.exports = {
    overwrite: true,
    schema: process.env.GQL_API_URL || '',
    headers: { Authorization: `Bearer ${process.env.GQL_API_KEY}` },
    documents: "./src/gql/*.graphql",
    generates: {
        'src/gql/gql-interfaces.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-resolvers',
                'typescript-document-nodes',
            ],
        },
        './graphql.schema.json': { plugins: ['introspection'] },
    },
};

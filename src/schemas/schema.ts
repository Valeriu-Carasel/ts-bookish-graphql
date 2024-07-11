import { buildSchema } from 'graphql';

// TODO: implement functionality
const schema = buildSchema(`
    type Book {
        id: ID!
        title: String!
        author: String!
        ISBN: String!
        copies: Int!
    }

    type Query {
        status: Int
        getBooks: [Book!]!
    }
`);

export default schema;

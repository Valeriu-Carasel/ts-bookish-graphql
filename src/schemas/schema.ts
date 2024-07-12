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
    
    type Borrowed {
        id: ID!
        idUser: Int!
        idBook: Int!
        dueDate: String!
    }
    
    type Query {
        status: Int
        getBooks: [Book!]!
        getBorrowed: [Borrowed!]!
    }
    type Mutation {
        addBook(title: String!, author: String!, ISBN: String!, copies: Int!): Book
    }
`);

export default schema;

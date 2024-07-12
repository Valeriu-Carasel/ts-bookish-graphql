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
    
    type User { 
        id: ID!
        username: String!
        passUser: String!
        token: String!
    }
    
    type Borrowed {
        id: ID!
        idUser: Int!
        idBook: Int!
        dueDate: String!
    }
    type Returned{
        book: Book
        dueDate: String!
    }
    
    type Query {
        status: Int
        getBooks: [Book!]!
        getBorrowed: [Borrowed!]!
        getUserByName(username: String!): User
        getCheckedOutBooks(username: String!): [Returned!]!
    }
    type Mutation {
        addBook(title: String!, author: String!, ISBN: String!, copies: Int!): Book
    }
`);

export default schema;

const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Book {
  id: ID!
  title: String!
  author: String!
  isRead: Boolean!
}

input BookInputData {
  title: String!
  author: String!
  isRead: Boolean!
}

type RootQuery {
  book(id: ID!): Book!
  books: [Book!]!
}
 
type RootMutation {
  addBook(bookInput: BookInputData!): Book!
  updateBook(id: ID!, bookInput: BookInputData!): Book!
  deleteBook(id: ID!): Boolean!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);

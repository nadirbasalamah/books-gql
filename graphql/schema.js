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
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);

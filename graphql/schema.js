const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Book {
  id: ID!
  title: String!
  author: String!
  isRead: Boolean!
}

input BookInputData {
  id: ID!
  title: String!
  author: String!
  isRead: Boolean!
}
 
type RootMutation {
  addBook(bookInput: BookInputData!): Book!
}

schema {
  mutation: RootMutation
}
`);

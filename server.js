const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const schema = buildSchema(`
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

  type RootQuery {
    book: Book!
  } 

  type RootMutation {
    addBook(bookInput: BookInputData!): Book!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

const resolver = {
  book: () => {
    const bookData = {
      id: "C001",
      title: "Algorithm",
      author: "Nathan Mckane",
      isRead: false,
    };
    return bookData;
  },
  addBook: ({ bookInput }) => {
    const createdBook = {
      id: bookInput.id,
      title: bookInput.title,
      author: bookInput.author,
      isRead: bookInput.isRead,
    };
    return createdBook;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("server started!");
});

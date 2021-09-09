const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const BookService = require("../service/service");
const AuthService = require("../service/auth");

module.exports = {
  addBook: async ({ bookInput }, req) => {
    if (!req.isAuth) {
      const error = new Error("Not authenticated.");
      error.code = 401;
      throw error;
    }

    const createdBook = {
      id: uuidv4(),
      title: bookInput.title,
      author: bookInput.author,
      isRead: bookInput.isRead,
    };

    const result = await BookService.addBook(createdBook);

    return result;
  },

  books: async (args, req) => {
    if (!req.isAuth) {
      const error = new Error("Not authenticated.");
      error.code = 401;
      throw error;
    }

    return await BookService.getBooks();
  },

  book: async ({ id }, req) => {
    if (!req.isAuth) {
      const error = new Error("Not authenticated.");
      error.code = 401;
      throw error;
    }

    return await BookService.getBook(id);
  },

  updateBook: async ({ id, bookInput }, req) => {
    if (!req.isAuth) {
      const error = new Error("Not authenticated.");
      error.code = 401;
      throw error;
    }

    const updatedBook = {
      title: bookInput.title,
      author: bookInput.author,
      isRead: bookInput.isRead,
    };

    const result = await BookService.updateBook(id, updatedBook);

    return result;
  },

  deleteBook: async ({ id }, req) => {
    if (!req.isAuth) {
      const error = new Error("Not authenticated.");
      error.code = 401;
      throw error;
    }

    return await BookService.deleteBook(id);
  },

  signup: async ({ userInput }) => {
    const hashedPassword = await bcrypt.hash(userInput.password, 12);

    const createdUser = {
      id: uuidv4(),
      email: userInput.email,
      password: hashedPassword,
    };

    const result = await AuthService.signup(createdUser);

    return result;
  },

  login: async ({ userInput }) => {
    const user = {
      email: userInput.email,
      password: userInput.password,
    };

    const foundUser = await AuthService.login(user);

    const isEqual = await bcrypt.compare(user.password, foundUser.password);
    if (isEqual) {
      const userToken = jwt.sign(
        {
          userId: foundUser.id,
          email: foundUser.email,
        },
        "thisisreallysecretsecret",
        { expiresIn: "1h" }
      );
      return { token: userToken, userId: foundUser.id };
    }
  },
};

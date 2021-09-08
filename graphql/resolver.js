const { v4: uuidv4 } = require("uuid");

const BookService = require("../service/service");

module.exports = {
  addBook: async ({ bookInput }) => {
    const createdBook = {
      id: uuidv4(),
      title: bookInput.title,
      author: bookInput.author,
      isRead: bookInput.isRead,
    };

    const result = await BookService.addBook(createdBook);

    return result;
  },

  books: async () => {
    return await BookService.getBooks();
  },

  book: async ({ id }) => {
    return await BookService.getBook(id);
  },

  updateBook: async ({ id, bookInput }) => {
    const updatedBook = {
      title: bookInput.title,
      author: bookInput.author,
      isRead: bookInput.isRead,
    };

    const result = await BookService.updateBook(id, updatedBook);

    return result;
  },

  deleteBook: async ({ id }) => {
    return await BookService.deleteBook(id);
  },
};

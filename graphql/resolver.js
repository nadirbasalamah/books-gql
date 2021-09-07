const { v4: uuidv4 } = require("uuid");

const BookService = require("../service/service");

module.exports = {
  addBook: ({ bookInput }) => {
    const createdBook = {
      id: uuidv4(),
      title: bookInput.title,
      author: bookInput.author,
      isRead: bookInput.isRead,
    };

    const result = BookService.addBook(createdBook);

    return result;
  },

  books: () => {
    return BookService.getBooks();
  },

  book: ({ id }) => {
    return BookService.getBook(id);
  },
};

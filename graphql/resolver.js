const BookService = require("../service/service");

module.exports = {
  addBook: ({ bookInput }) => {
    const createdBook = {
      id: bookInput.id,
      title: bookInput.title,
      author: bookInput.author,
      isRead: bookInput.isRead,
    };

    const result = BookService.addBook(createdBook);

    return result;
  },
};

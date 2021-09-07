const BookRepository = require("../repository/repository");

class BookService {
  static addBook(data) {
    return BookRepository.addBook(data);
  }

  static getBooks() {
    return BookRepository.getBooks();
  }

  static getBook(id) {
    return BookRepository.getBook(id);
  }
}

module.exports = BookService;

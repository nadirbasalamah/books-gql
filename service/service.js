const BookRepository = require("../repository/repository");

class BookService {
  static addBook(data) {
    return BookRepository.addBook(data);
  }
}

module.exports = BookService;

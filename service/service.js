const BookRepository = require("../repository/repository");

class BookService {
  static async addBook(data) {
    return await BookRepository.addBook(data);
  }

  static async getBooks() {
    return await BookRepository.getBooks();
  }

  static async getBook(id) {
    return await BookRepository.getBook(id);
  }

  static async updateBook(id, data) {
    return await BookRepository.updateBook(id, data);
  }

  static async deleteBook(id) {
    return await BookRepository.deleteBook(id);
  }
}

module.exports = BookService;

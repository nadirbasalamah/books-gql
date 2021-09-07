const books = require("../model/model");

class BookRepository {
  static addBook(data) {
    books.push(data);
    return data;
  }

  static getBooks() {
    return books;
  }

  static getBook(id) {
    return books.filter((book) => book.id === id)[0];
  }
}

module.exports = BookRepository;

const books = require("../model/model");

class BookRepository {
  static addBook(data) {
    books.push(data);
    return data;
  }
}

module.exports = BookRepository;

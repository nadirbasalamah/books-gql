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

  static updateBook(id, data) {
    const updatedBook = this.getBook(id);

    updatedBook.title = data.title;
    updatedBook.author = data.author;
    updatedBook.isRead = data.isRead;

    return updatedBook;
  }

  static deleteBook(id) {
    const index = books.findIndex((book) => book.id === id);

    books.splice(index, 1);

    return true;
  }
}

module.exports = BookRepository;

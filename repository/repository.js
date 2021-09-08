const Book = require("../model/model");

class BookRepository {
  static async addBook(data) {
    try {
      const insertedBook = await Book.create({
        id: data.id,
        title: data.title,
        author: data.author,
        is_read: data.isRead,
      });

      return insertedBook;
    } catch (error) {
      console.log(error);
    }
  }

  static async getBooks() {
    try {
      const books = await Book.findAll();
      return books;
    } catch (error) {
      console.log(error);
    }
  }

  static async getBook(id) {
    try {
      const book = await Book.findByPk(id);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBook(id, data) {
    try {
      await Book.update(
        {
          title: data.title,
          author: data.author,
          is_read: data.isRead,
        },
        {
          where: {
            id: id,
          },
        }
      );

      const updatedBook = await this.getBook(id);

      return updatedBook;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteBook(id) {
    try {
      const result = await Book.destroy({
        where: {
          id: id,
        },
      });

      if (result !== 0) {
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

module.exports = BookRepository;

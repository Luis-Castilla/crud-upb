const Book = require("../../models/book/book.model.js");

exports.findByIdService = async (id) => {
  try {
    const book = await Book.findById(id);
    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }
    return book;
  } catch (error) {
    console.error("Error en findByIdService: ", error);
    throw error;
  }
};
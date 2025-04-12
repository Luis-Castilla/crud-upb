const Book = require("../../models/book/book.model.js");

exports.createService = async (req) => {
  try {
    // Create a Book
    const book = new Book({
      title: req.body.title,
      description: req.body.description || "No description",
      author: req.body.author,
      published: req.body.published || false,
    });

    return await book.save();
  } catch (error) {
    console.error("Error en createService: ", error);
    throw error;
  }
};
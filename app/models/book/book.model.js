// filepath: /Users/luiscastilla/Desktop/crud/app/models/book/book.model.js
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "No description" },
  author: { type: String, required: true },
  published: { type: Boolean, default: false }
});

module.exports = mongoose.model("Book", BookSchema);
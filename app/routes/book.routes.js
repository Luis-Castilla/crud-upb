module.exports = app => {
  const bookController = require("../controllers/book.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", bookController.create);

  // Retrieve by id
  router.get("/:id", bookController.findById);

  app.use('/api/books', router);
};
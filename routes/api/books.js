const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .post(booksController.create)
  .get(booksController.findAll);

// Matches with "/api/books/:id" Porque en el index.js de api, estoy poniendo que la base es /books
router.route("/:id")
  .delete(booksController.remove);

module.exports = router;

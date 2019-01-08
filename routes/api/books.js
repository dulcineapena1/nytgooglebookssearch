const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id" Porque en el index.js de api, estoy poniendo que la base es /books
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .delete(booksController.remove);

module.exports = router;

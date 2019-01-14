const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/google"
router.route("/")
  .get(booksController.findAllGoogle);
 
module.exports = router;

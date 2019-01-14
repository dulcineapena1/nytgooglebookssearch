const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, unique:true }, //Con unique true evito contenido duplicado
  authors: { type: [String]},
  description: { type: String, unique:true },
  image:{ type: String, unique:true },
  link: { type: String,  unique:true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

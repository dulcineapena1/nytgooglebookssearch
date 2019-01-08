import axios from "axios";

//Este archivo es similar al ajax que tenías antes en un .js del front
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  guardarBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

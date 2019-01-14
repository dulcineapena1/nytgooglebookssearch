import axios from "axios";

//Este archivo es similar al ajax que tenías antes en un .js del front
export default {
  //Search for a google book
  getGoogleBook: function(value){
    //Aquí dices que el param es una q:title + el valor que pides en front. Así va la url con una q
    return axios.get("/api/google", {params: {q: "title:" + value } }); 
  },
  // Gets all books saved in database
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);
// This file empties the Books collection and inserts the books below

const bookSeed = [
  {
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games"
  },
  {
    authors: ["lara"],
    description: "descripcion 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_2g8YWdSon6ZRoUzRmB3O6qLHTS_z0pi2jz2yEsPb3EVjA3p-A",
    link: "https://books.google.com.mx/books?id=1N0KDgAAQBAJ&printsec=frontcover&dq=title:el+principito&hl=es&sa=X&ved=0ahUKEwjPv4vo_tnfAhVPgK0KHSoVCi8Q6AEIKTAA#v=onepage&q&f=false",
    title: "El principito"
  },
  {
    authors: ["nono"],
    description: "de la verdad fraccionada",
    image: "http://emeestudio.com/wp-content/uploads/2013/02/verdad-fraccionada-portada-e1361503596883.jpg",
    link: "https://books.google.com.mx/books?id=87pXAgAACAAJ&dq=title:la+verdad+fraccionada&hl=es&sa=X&ved=0ahUKEwi4wbL6_tnfAhUBPa0KHSsSCXwQ6AEIKTAA",
    title: "La verdad fraccionada"
  }
];

db.Book
  .remove({}) //la vacía y la vuelva a llenar cada que corres este archivo
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

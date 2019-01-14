import React, { Component } from "react";
import MostrarTodos from "../../components/mostrartodos";
import {Fichas} from "../../components/mostrartodos/fichas";
import API from "../../utils/API";


class Saved extends Component {

  state = {
    booksguardados:[],
  }


  // Muestra los libros guardados al cargar componente
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ booksguardados: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = aborrar => {
    API.deleteBook(aborrar.id)
    .then(res => this.loadBooks())
    .catch(err=>console.log(err));
  };
  
  viewBook = linkeado => {
   window.location.href= linkeado.link // El primer link es del parámetro traido desde el componente y el otro es el link de abajo
  };





  render() {
    return (

      <div className="basico">
        
        <Fichas>

          {this.state.booksguardados.map(guardados => (
            <MostrarTodos
              id={guardados._id}
              key={guardados._id}
              title={guardados.title}
              description={guardados.description}
              authors={guardados.authors}
              image={guardados.image}
              link={guardados.link}
              deleteBook={this.deleteBook} //Botón borrar
              viewBook={this.viewBook} // Botón ver
            />
          ))}

        </Fichas>

      </div>

    );
  }
}

export default Saved;


import React, { Component } from "react";
import Agregar from "../../components/agregar";
import {Fichas} from "../../components/mostrartodos/fichas";
//import {Guardar} from "../../components/agregar/botonguardarenDB"
import booksnoguardados from "../../booksnoguardados.json"
import API from "../../utils/API";


class Search extends Component {
    state = {
        booksnoguardados,
        booksguardados:[],
        title: "",
        authors: [],
        description: "",
        link: "",
        image: ""
    }

    // Carga todos los libros inicialmente
    // componentDidMount() {
    //     this.loadBooks();
    // }


    guardarBook = elegido => {
        //Este "id" es el que pasé como prop y argumento desde el componente del botón, puede ser otra palabra,
        //ya que sólo sirve para poder obtener el dato de "onClick"

        //event.preventDefault();
        const{title, authors,description,image,link} = elegido;
        console.log("elegido es:",elegido);
        this.setState({
            title: title, // El primer elemento es el state y el segundo lo que está abajo en el componente
            authors: authors,
            description: description,
            image: image,
            link: link
        })
        console.log(this.state.title)
        // if(this.state.title){
        //     API.guardarBook({
        //         title:  this.state.title,
        //         authors:  this.state.authors,
        //         description: this.state.description,
        //         image: this.state.image,
        //         link: this.state.link
        //     })
        //     //   .then(res => this.loadBooks())
        //       .catch(err => console.log(err));



        // }
        
        };

 render() {
  return (


    <div>
    <Fichas>

        {this.state.booksnoguardados.map(noguardados => (
           
            <Agregar
            id={noguardados._id}
            key={noguardados._id}
            title={noguardados.title}
            description={noguardados.description}
            authors={noguardados.authors}
            image={noguardados.image}
            link={noguardados.link}
            guardarBook={this.guardarBook} 
            //Este es el botónguardarenDB, que está dentro del componente Agregar. Pasarlo como prop me permite acceder a las props hermanas al momento de dar click
            //aquí arriba antes era onClick={this.guardarBook}y hasta arriba era event y event.target
            >
                {/* <Guardar onClick={this.guardarBook}/> */}
            </Agregar>
        ))}


    </Fichas>
    </div>





);
}
}

export default Search;


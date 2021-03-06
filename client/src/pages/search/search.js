import React, { Component } from "react";
import Agregar from "../../components/agregar";
import {Fichas} from "../../components/mostrartodos/fichas";
import {Buscadorgoogle} from "../../components/agregar/buscadorgoogle"
import API from "../../utils/API";
import "../../components/mostrartodos/mostrartodos.css";



class Search extends Component {

    state = {
        libroabuscar: "",
        bookencontradoengoogle:{},
        booksguardados:{},
      
    }

    handleOnChangeBuscadorGoogle = event => {
        const {value}=event.target;
        this.setState({
            libroabuscar:value
        })
    }

    buscarGoogleBook2 = event => {
        event.preventDefault();
        this.buscarGoogleBook();        
    }

    buscarGoogleBook = () => {
        API.getGoogleBook(this.state.libroabuscar)
        .then(res => this.setState({ bookencontradoengoogle: res.data }))
        .catch(err => console.log(err));
    }

    submitBook = elegido => {
        //Este "id" es el que pasé como prop y argumento desde el componente del botón, puede ser otra palabra,
        //ya que sólo sirve para poder obtener el dato de "onClick"
        console.log("elegido es:",elegido);
                API.saveBook({
                    title:  elegido.title,
                    authors: elegido.authors,
                    description: elegido.description,
                    image: elegido.image,
                    link: elegido.link
                })
                .then(res => this.setState({ booksguardados: res.data }))
                .catch(err => console.log(err,"este"))
    };

    viewBook = linkeado => {
        window.location.href= linkeado.link // El primer link es del parámetro traido desde el componente y el otro es el link de abajo
    };




 render() {
  return (


            <div>
                
                <Buscadorgoogle
                    value={this.state.libroabuscar}
                    onChange={this.handleOnChangeBuscadorGoogle}
                    buscarGoogleBook2={this.buscarGoogleBook2} //Botón search
                /> 
            
                {this.state.bookencontradoengoogle.length ? (
                    <Fichas>
                        {this.state.bookencontradoengoogle.map(noguardados => (
                            <Agregar
                                key={noguardados.id}
                                title={noguardados.volumeInfo.title}
                                description={noguardados.volumeInfo.description}
                                authors={noguardados.volumeInfo.authors}
                                image={noguardados.volumeInfo.imageLinks.smallThumbnail }
                                link={noguardados.volumeInfo.infoLink}
                                submitBook={this.submitBook} //Botón para guardar en database. Pasarlo como prop me permite acceder a las props hermanas al momento de dar click.
                                viewBook={this.viewBook} // Botón ver       
                            />
                        ))}
                    </Fichas>
                ):(
                    <h2 >No books searched yet</h2>
                )}
            
            </div>


        );
    }
}

export default Search;


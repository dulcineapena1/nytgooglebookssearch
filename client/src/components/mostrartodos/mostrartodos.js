import React from "react";
import {Borrar} from "./botonborrarenDB"
import {Ver} from "./botonver"



function MostrarTodos(props) {
  return (

    <div className="card">
        <img className="card-img-top" src={props.image} alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">{props.authors}</p>
            <p className="card-text"><small className="text-muted">{props.link}</small></p>
        </div>
        <Borrar onClick={()=>props.deleteBook({...props})}/> 
        <Ver onClick={()=>props.viewBook({...props})}/> 
        {/* <Ver onClick={`window.location.href=' ${props.viewBook}';return false;` }/>  */}




        {props.children}
    </div>

    
  );
}

export default MostrarTodos;



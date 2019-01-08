import React from "react";
import "./agregar.css";
import {Guardar} from "./botonguardarenDB"


function Agregar(props) {
  return (


     
    <div className="card">
        <img className="card-img-top" src={props.image} alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">{props.authors}</p>
            <p className="card-text"><small className="text-muted">{props.link}</small></p>
        </div>
        <Guardar onClick={()=>props.guardarBook({...props})}/> 
        {/* //antes era solo Guardar con //{...props} */}
        {props.children}
    </div>

    
  );
}

export default Agregar;



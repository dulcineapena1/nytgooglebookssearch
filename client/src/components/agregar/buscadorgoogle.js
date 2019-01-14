import React from "react";
import "./agregar.css";


export const Buscadorgoogle = props => {
  return (

    <form>
      <div className="form-group">
          <input type="name" {...props} className="form-control" id="buscador" placeholder="Search a book"/>
      </div>
      <button onClick={props.buscarGoogleBook2} className="btn btn-primary">Search</button>
    </form>

  );
};



// function Buscadorgoogle(props) {
//   return (


  //onClick={()=>props.buscarGoogleBook({...props})}


    
//   );
// }

// export default Buscadorgoogle;














import React from "react";


export const Fichas = props => {
    // con props.children me traigo las props del children que en este caso sería
    return (
        <div class="card-deck">
            {props.children}
        </div>
    );
};




// function Fichas(props) {
//   return (
//     //Puedes poner un div contenedor conteniendo a card-deck
//     <div class="card-deck">
//         {this.props.children}
//     </div>
//   );
// }

//export default Fichas;

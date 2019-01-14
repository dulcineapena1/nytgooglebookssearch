import React from "react";


export const Fichas = props => {
    // con props.children me traigo las props del children que en este caso sería
    return (
        <div className="card-deck">
            {props.children}
        </div>
    );
};


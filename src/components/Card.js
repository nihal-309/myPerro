import React from "react";

function Card(props){
    return(
        <div className="Card">
            <div className="card-text">
                <h1>{props.head}</h1>
                <button className="butt">BOOK NOW</button>
            </div>
            <img src={props.route} alt="" />
        </div>
    )
}

export default Card;
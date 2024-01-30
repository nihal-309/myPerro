import React from "react";

function Card1(props){
    return(
        <div className="Card1">
            <img src={props.route} alt="" />
            <h4>{props.desc}</h4>
            <h6>{props.desc1}</h6>
        </div>
    )
}

export default Card1;
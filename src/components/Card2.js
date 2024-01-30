import React from "react";  
import IMG4 from "../images/rating.png";

function Card2(props){
    return(
        <div className="Card2-container">
            <div className="first">
                <img src={props.route} alt="" />
                <h5>{props.desc}</h5>
            </div>
            <div className="second">
                <img src={IMG4} alt="" />
                <div className="text">
                    <h1>{props.rev1}</h1>
                    <h5>{props.rev2}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card2;
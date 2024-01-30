import React from "react";
import IMG1 from "../images/Picture1.jpg"
import IMG2 from "../images/cats.jpeg"

function Soon(){
    return(
        <div className="Soon-container">
            <div className="soon-text">
                <h1><span className="yell">DOG </span>TRAINING</h1>
                <h3>COMMING SOON</h3>
            </div>
            <img src={IMG1} alt="" />
            <img className="xx" src={IMG2} alt="" />
        </div>
    )
}

export default Soon;
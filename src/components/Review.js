import React from "react";
import IMG1 from "../images/comma.png"
import IMG2 from "../images/rating.png"

function Review(){
    return(
        <div className="Review-container">
            <h1>Reviews</h1>
            <div className="Review">
                <img className="comma" src={IMG1} alt="" />
                <h2>OVERALL RATING</h2>
                <img className="rating" src={IMG2} alt="" />
                <h2>DOG WALKING</h2>
                <img className="rating" src={IMG2} alt="" />
                <h2>DOG BOARDING</h2>
                <img className="rating" src={IMG2} alt="" />
                <button className="rate">RATE US</button>
            </div>
        </div>
    )
}

export default Review;
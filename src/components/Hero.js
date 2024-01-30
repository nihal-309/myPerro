import React from "react";
import IMG1 from "../images/hero.jpg"

function Hero(){
    return(
        <div className="Hero">
            <div className="hero-container">
                <img className="hero-img" src={IMG1} alt="" />
                <div className="hero-text">
                    <h1><span className="my">my</span>Perro</h1>
                    <h4>Unleashing Tail-Wagging Moments, One Paw at a Time</h4>
                </div>
            </div>
        </div>
    )
}

export default Hero; 
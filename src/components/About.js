import React from "react";
import Card1 from "./Card1";
import IMG1 from "../images/ratan.jpg";
import IMG2 from "../images/mukesh.jpg";
import IMG3 from "../images/adani.jpeg";
import IMG4 from "../images/vishy.jpg";
import IMG5 from "../images/murthy.jpeg";
import 'react-multi-carousel/lib/styles.css';


function About(){
    return( 
        <div className="about-container">
            <div className="card-text">
                <h1><span className="yell">ABOUT </span> US</h1>
                <button className="butt">KNOW MORE</button>
            </div>
            <div className="Abouttt">
                <Card1 route={IMG1} desc="Ratan Tata" desc1="MD"/>
                <Card1 route={IMG2} desc="Mukesh Ambani" desc1="CEO"/>
                <Card1 route={IMG3} desc="Gautham Adani" desc1="Director"/>
                <Card1 route={IMG5} desc="Narayan Murthy" desc1="Founder"/>
                <Card1 route={IMG4} desc="Vishy" desc1="Sabka Baap"/>
            </div>
        </div>
    )
}

export default About;
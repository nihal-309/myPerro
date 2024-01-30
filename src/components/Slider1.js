import React from "react";
import IMG1 from "../images/ratan.jpg";
import IMG2 from "../images/mukesh.jpg";
import IMG3 from "../images/adani.jpeg";
import IMG4 from "../images/vishy.jpg";
import IMG5 from "../images/murthy.jpeg";
import Carousel from "react-multi-carousel";
import Card1 from "./Card1";
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 300 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const Slider1 = () => {
    return (
        <div id="Blog" className="Slider1   ">
            <Carousel
            arrows={true}
            // centerMode={true}
            focusOnSelect={true}
            renderButtonGroupOutside={false}
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
            >
            <Card1 route={IMG1} desc="Ratan Tata" desc1="MD"/>
            <Card1 route={IMG2} desc="Mukesh Ambani" desc1="CEO"/>
            <Card1 route={IMG3} desc="Gautham Adani" desc1="Director"/>
            <Card1 route={IMG5} desc="Gautham Adani" desc1="Founder"/>
            <Card1 route={IMG4} desc="Vishy" desc1="Sabka Baap"/>
        </Carousel>
        </div>
    )}

export default Slider1;
import React from "react";
import IMG1 from "../images/dog_walk.jpg";
import IMG2 from "../images/dog_train.jpg";
import IMG3 from "../images/dog_board.jpg";
import IMG4 from "../images/dog_groom.png";
import Carousel from "react-multi-carousel";
import Card from "./Card";
import 'react-multi-carousel/lib/styles.css'

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
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const Slider = () => {
    return (
        <div id="Blog" className="Slider">
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
            <Card head={<span><span className="yell">DOG </span><span>WALKING</span></span>} route={IMG1} />
            <Card head={<span><span className="yell">DOG </span><span>WALKING</span></span>} route={IMG3} />
            <Card head={<span><span className="yell">DOG </span><span>WALKING</span></span>} route={IMG4} />
            <Card head={<span><span className="yell">DOG </span><span>WALKING</span></span>} route={IMG2} />
            </Carousel>
        </div>
    )}

export default Slider;
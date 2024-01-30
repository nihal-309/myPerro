import React from "react";
import IMG1 from "../images/amitabh.png";
import IMG2 from "../images/salman.jpg";
import IMG3 from "../images/Sharukh.jpg";
import Carousel from "react-multi-carousel";
import Card2 from "./Card2";
import 'react-multi-carousel/lib/styles.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 300 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const Slider2 = () => {
    return (
        <div id="Blog" className="Slider">
            <Carousel
            containerClass="slider"
            itemClass="item"
            arrows={true}
            wid
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
            <Card2 route={IMG1} rev1="Top-Notch Care" rev2="myPerro provides exceptional dog care services! From daily walks to overnight boarding, their team ensures your furry friend receives top-notch care. Professional, reliable, and dedicated to creating happy tails!" desc="Amitabh Bachhan" />
            <Card2 route={IMG3} rev1="Doggy Paradise" rev2="myPerro is a doggy paradise! Our pup loves their daycare and boarding services. The staff is caring, the facilities are clean, and the regular updates put our minds at ease. Highly recommended for any dog parent!" desc="Sharukh Khan" />
            <Card2 route={IMG2} rev1="Pawsitively Cool" rev2="myPerro's grooming services are pawsitively amazing! Our dog always looks and smells fantastic after a visit. The groomers are skilled, friendly, and attentive to every detail. A grooming experience like no other!" desc="Selmon Bhai" />
            </Carousel>
        </div>
    )}

export default Slider2;
import React from "react";
import IMG1 from "../images/phone.png"
import IMG2 from "../images/email.png"

function Footer(){
    return(
        <div id="foot" className="Footer">
            <div className="about">
                <div className="leftt">
                    <h1 className="shiksha"><span className="yelll">my</span>Perro</h1>
                    <p>
                    myPerro is your trusted haven for comprehensive dog care services. With a team of dedicated professionals, we offer everything from daily walks and expert training programs. Our commitment goes beyond basic care, focusing on the unique needs of each furry friend.
                    </p>
                    <div className="ph">
                        <img className="phone" src={IMG1} alt="" />
                        <p>123-456-7890</p>
                    </div>
                    <div className="em">
                        <img className="email" src={IMG2} alt="" />
                        <p className="ok">nihal1362003@gmail.com</p>
                    </div>
                </div>
                <div className="links">
                    <h2>Quick Links</h2>{/*eslint-disable-next-line*/}
                    <li><a href="#">Home</a></li> {/*eslint-disable-next-line*/}
                    <li><a href="#About-container">About Us</a></li>{/*eslint-disable-next-line*/}
                    <li><a href="#Proj">Reviews</a></li>{/*eslint-disable-next-line*/}
                    <li><a href="#Event">Coming Up</a></li>{/*eslint-disable-next-line*/}
                    <li><a href="#Blog">Facilities</a></li>{/*eslint-disable-next-line*/}
                </div>
                <div className="contact">
                    <h2>Contact Us</h2>
                    <form action="">
                        <input type="email" placeholder="Your Email Address..."/>
                        <textarea name="mesaage" placeholder="Your message..." id="" cols="30" rows="6"></textarea>
                        <button type="submit">
                            <img className="emaill" src={IMG2} alt="" />
                            <p className="emm">Send</p>
                        </button>
                    </form>
                </div>
            </div>
            <div className="copyright">
                &copy;  2024  Shiksha
            </div>
        </div>
        
    )
}

export default Footer;
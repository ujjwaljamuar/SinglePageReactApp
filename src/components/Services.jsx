import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const Services = () => {
    return (
        <div>
            <Carousel
                infiniteLoop
                autoPlay
                interval={1500}
                showArrows={false}
                showStatus={false}
                // showIndicators={false}
                // showThumbs={false}
            >
                <div>
                    <img src={img3} alt="img3" />
                    <p className="legend">MERN Stack Development</p>
                </div>

                <div>
                    <img src={img4} alt="img4" />
                    <p className="legend">Web Development using MERN</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Services;

import React from "react";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

import "../styles/Home.scss";
import vg from "../assets/2.webp";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>React Single Page Website</h1>
                    <p>Demo of a single page Website using ReactJS</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems
                        you face every day. We are leading tech company whose
                        aim is to increase the problem solving ability in
                        children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who are we?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis placeat ab, sunt asperiores eveniet sapiente
                        facere. Aperiam placeat, expedita aliquid qui iure
                        numquam, iste, amet aliquam eaque nihil quas ipsa? Lorem
                        ipsum dolor, sit amet consectetur adipisicing elit.
                        Iure, error saepe facilis reiciendis recusandae expedita
                        quasi ducimus cupiditate perferendis doloribus ea
                        obcaecati quis illum eaque eveniet placeat repellendus
                        reprehenderit non. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Blanditiis animi qui
                        natus, exercitationem tenetur hic. Voluptate doloribus
                        laudantium qui eius? Perferendis suscipit harum laborum
                        doloremque. Saepe magni ipsam illum rerum!
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;

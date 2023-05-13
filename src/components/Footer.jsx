import React from "react";

import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer id="contact">
            <div>
                <h1>TechyStar</h1>
                <p>@all right reserved</p>
            </div>

            <div>
                <h5>Follow Us</h5>
                <div>
                    <a
                        href="https://youtube.com/6packprogrammer"
                        target={"blank"}
                    >
                        Youtube
                    </a>
                    <a
                        href="https://instagram.com/meabhisingh"
                        target={"blank"}
                    >
                        Instagram
                    </a>
                    <a href="https://github.com/meabhisingh" target={"blank"}>
                        Github
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

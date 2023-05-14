import React from "react";

import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer>
            <div>
                <h1>Single Page React Website</h1>
                <p>@all right reserved</p>
            </div>

            <div>
                <h5>Follow Us</h5>
                <div>
                    <a href="https://github.com/ujjwaljamuar" target={"blank"}>
                        Github
                    </a>
                    <a
                        href="https://instagram.com/loneee_wolff_"
                        target={"blank"}
                    >
                        Instagram
                    </a>
                    <a
                        href="https://linkedin.com/in/ujjwal-jamuar"
                        target={"blank"}
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

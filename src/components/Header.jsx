import React from "react";
import { Link } from "react-router-dom";

import '../styles/Header.scss';

const Header = () => {
    return (
        <nav>
            <h1>SinglePageWebsite</h1>
            <main>
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contact Us</Link>
                <Link to={"/#about"}>About</Link>
                <Link to={"/#brands"}>Brands</Link>
                <Link to={"/services"}>Services</Link>
            </main>
        </nav>
    );
};

export default Header;

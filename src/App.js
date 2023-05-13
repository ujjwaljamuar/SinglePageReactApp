import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/App.scss";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import Contact from "./components/Contact.jsx"


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

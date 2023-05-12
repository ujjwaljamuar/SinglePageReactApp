import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/Header";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

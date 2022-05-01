import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
    const theme = useState("darkblue");
    return (
        <ThemeContext.Provider value={theme}>
            <StrictMode>
                <BrowserRouter>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Routes>
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </BrowserRouter>
            </StrictMode>
        </ThemeContext.Provider>
    );
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

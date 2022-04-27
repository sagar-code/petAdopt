import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <StrictMode>
            <div>
                <h1>Adopt Me!</h1>
                <SearchParams />
            </div>
        </StrictMode>
    );
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Zoro",
            animal: "Dog",
            breed: "Bhote",
        }),
        React.createElement(Pet, {
            name: "Bhunte",
            animal: "Dog",
            breed: "Bhusiya",
        }),
        React.createElement(Pet, {
            name: "Drogo",
            animal: "Dog",
            breed: "Huskey",
        }),
    ]);
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));

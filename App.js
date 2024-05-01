import React from "react";
import ReactDOM from "react-dom/client";

//JSX => JSX is a syntax extention of JavaScript, its a HTML-like syntax

const jsxHeading = (
    <h1 id="heading" className="text">Thi is JSX h1 element</h1>
)

// This will return an object similar to React.createElement()

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// Functional components in React. Function components will always be written in first uppercase letter and it will return a React Element. 

const HeadingComponent = () => {
    return (
        <div className="hello">
            hello
        </div>
    );
};
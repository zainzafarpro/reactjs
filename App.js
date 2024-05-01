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

// Functional components in React. Function components will always be written with Capital letter and it will return a React Element. 

const Title = () => (
    <div className="title">This is a Title which will be called in other component</div>
);

const randomenumber = 1132138312;

const HeadingComponent = () => {
    return (
        <> 
            {/* this is called component composition, there are multiple ways to inject a component inside a component. */}
            <Title />
            <Title></Title>
            {Title()}
            
            {/* in these curly brakcets we can write any piece of javaScript code*/}
            {jsxHeading}
            {10 * 10 - 10}
            {randomenumber}

            <div className="hello">
                <h1>Hello</h1>
            </div>
        </>
    )
};

root.render(<HeadingComponent />)
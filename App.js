// This is how we can create an element in react using React API which is provided by React CDN.
const heading = React.createElement("h1", {
    id: "heading",
    class: "now"
}, "Hello React js");


// createElement("tagname", {objec}, children or an array of children) has 3 argument, 1st is the tag name, 2nd is the props(object) and the 3rd one is the children or an array

// if we print the element we just created using React, Then it will show an object in the browser console, React generated a javascript object.
// This is a react Element it is not the h1 tag yet.
console.log(heading); // returns a object.


// this is how you can create a nested structure in which the 3rd argument will be an array which takes the reactElement.
const nestedStructure = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {class: 'child'}, [
        React.createElement("h1", {class:'heading'}, "hello h1")
    ]),
    React.createElement("div", {class: 'chil2'}, [
        React.createElement("h2", {class:'heading'}, "hello h2")
    ]),
]);

console.log(nestedStructure);

// React DOM handles the rendering of elements, This is how we can create a container where all of our react code will be rendered.
const root = ReactDOM.createRoot(document.getElementById("root"));

// This is how we can render a element inside our container in react, when the heading variable is passed to render() function. This funtion will create a h1 tag and will push the props inside it, props are the attribute and children of React Element.
root.render(heading); // this is converting the "heading" object into an actual h1 tag and pushing it into the #root div and replacing everything if we have written something directly into our html file.
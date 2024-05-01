# React JS - a powerful JavaScript library | Notes from Namste React

What is the difference between a library and a framework?

A library can work independently in a existing project or a small portion of the page whereas a framework comes along with whole lots of utilities and its environment.

> React can be included via CDN also.

# Episode - 1

```html
<div id="root"></div>
```

```javascript
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
```

# Episode - 2

we have enabled our repository with npm using the command called `npm init`.
When we use npm init it will create a package.json file, this file is basically a configuration which will keep a track of our dependencies and app version.
After that we have installed a bundler called parcel, This bundler will help us bundle our code which will be used on production

**What Parcel do?**

Parcel itself doesn't do much but it gives responsibility of different tasks to different packages. So Parcel is like a manager.

- Dev builds
- local server
- HMR = Hot module replacement(auto refresh)
- File watching Alogrithm - written in c++
- Caching 
- Image Optimization
- Minification - Bundling files
- Compress files
- Consistent Hashing
- Code spliting
- Dignostics
- Tree Shaking - will remove unused code

```json
{
  "name": "example-react-app",
  "version": "1.0.0",
  "description": "Training Namaste React",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/zainzafarpro/reactjs.git"
  },
  "keywords": [
    "react",
    "javascript"
  ],
  "author": "Zain Zafar",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/zainzafarpro/reactjs/issues"
  },
  "homepage": "https://github.com/zainzafarpro/reactjs#readme",
  "devDependencies": {
    //that small hat sign is a caret, this means if there is a small version upgrade available for example 2.12.13 then update it automatically. we can use '~' tilde for the major upgrade.
    "parcel": "^2.12.0"
  }
}
```
After installing the bundler a package-lock.json will be created. This file is also a configuration file and it will keep a track of exact version that is being installed. It kinds of lock the versions of dependencies and keeps a record of it.

**What is the difference between devDependencies and dependencies in package.json?**

A devDependencie is only required when development of the project is going. it is not required on the Production whereas a dependencie is required on production also.

**What is npx?**

npx means executing a npm package. The syntax should be `npx <package name>`. Here in this case we have ignited our app using parcel and the command which we used is `npx parcel index.html`. This will run our app onto a localhost server.


# Episode - 3

Added 2 scripts in package.json so that we can simply ignite our app using a npm command instead of executing package directly using npx

```json
"start": "parcel index.html",
"build": "parcel build index.html"
```

**What is JSX?**

JSX is a syntax extention of JavaScript, its a HTML-like syntax it is behind the scene is `React.createElement()`. If we `console.log(jsxHeading)` it will return us an object same as `React.createElement()`. we use JSX inside react applications because it is more readable and easy way to write code in React. JSX is not a valid JavaScript code, a JS engine does not understand JSX directly, JSX starts from rounded bracket and ends on rounded bracket. if you run this code directly into the browser console you will get an error. JSX needs to be transpiled into the valid javaScript code and then it will run on browsers.  In this case Parcel gives this responsibility to Babel which is also a npm package. Babel is a javaScript compiler which transpile the code into valid js code which JS engine understands. In this case Babel is transpiling JSX into the JavaScript code.

> JSX is not part of React.js

```jsx
// This behind the scene creates an element using React.createElement().
const jsxHeading = <h1>Thi is JSX h1 element</h1>; // will return an {object}
```

If we need to write JSX in multiple lines then we need to wrap our code into rounded brackets (); something like this

```jsx
const multiLine = (<div>
    <h1>text</h1>
</div>)
```


**What is React Component?**

There are 2 types of components in React.

- Class based Components:
  Class based components uses JavaScript classes to create React components.

- Functional Components:
  Functional components uses JavaScript function to create React components.


**Example of Functional Components**

Functional Components are the normal JavaScript functions. In React we need to write functional components with Capital latter. This is a react way to create a component. Functional component returns a React Element in the end or a jsx code.


```jsx
// Functional component
const HeadingComponent = () => {
    return (
        <div className="hello">
            hello
        </div>
    );
};

/**
 * if we dont write return then the curely brackets will be removed,
 *  and we will wrap our jsx code into rounded brackets directly.
 * */

const Heading2Component = () => (
  <div className="hello">
      hello
  </div>
);

/**
 * This is a way to render functional component
*/
root.render(<Heading2Component />)

/**
 * This is a way to render React Element
*/

root.render(heading)
```

**Component Composition**

Component Composition is known as calling a component inside another component.

```jsx
const Heading2Component = () => (
  <div className="hello">
    <HeadingComponent />
      hello
  </div>
);

/**
 * if we want to write any JavaScript code or a React Element inside our Component.
 * Then we need to follow the the below example.
 */

// in curly brackets we can write any piece of javaScript code.
// at the end of the day React Components are the normal javaScript functions so we can call them as normal function inside curly brakcets
const Heading2Component = () => (
  <>
    {jsxHeading}
    {10 * 10}
    {"zain" + "zafar"}

    <HeadingComponent />
    
    <HeadingComponent></HeadingComponent>
    
    {HeadingComponent()}
    
    <div className="hello">
        hello
    </div>
  <>
);
```
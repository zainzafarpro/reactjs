# 🚀 React JS - a powerful JavaScript library | Notes from Namste React

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

# Epsisode - 4

**What are the Props?**

Props are the short form of properties which we can pass to a component. React Functional components are the normal functions so you can say the props are the arguments which is passed to a Function.

```jsx
/**
 * This is how we receive props aka arguments into a Functional Component.
 * Here props is an object, whatever is passed to a Hotel component when called, React will wrap everything into an object and send it to it's main function.
*/
const Hotel = (props) => {
    console.log(props)
    return (
        <div className="hotel">
            <strong className="name">{props.name}</strong>
            <p className="description">{props.description}</p>
            <span className="location">{props.location}</span>
        </div>
    )
}

/**
 * This is how we can pass props to a Component.
 * All of these properties will be wrapped inside an object when we receive it where this component is written
*/
<Hotel name="HOne" description="Lorem ipsum dollar site emat" location="Davis road"/>
```

# Episode - 5

**File structure in React**

React doesn't have any opinion about the file structure, So we can follow any file structure we want. We will be keeping our file and folder structure simple and plain. All of the components will go to component folder and each component file will have the same name as the component function. `Header.js` file will have Header component.


**Import your component in main file**

We now have separate files for each component, We must export the component from file and then we will be able to import the component.
There are 2 types of exports, default export and named export.
If we have to export single thing from a file then we use default keyword. If we have to export multiple things from a single file
Then we have to use named export.

```jsx
// This is how we should export our component, this is also known as default export. We cannot write this statement multiple times.
export default HeaderComponent;

// This how we should import our component. This is importing a default export component.
import HeaderComponent from "./components/HeaderComponent";
```

Named export and import example:

When we do named export then while importing we need to put curly brackets and in curly brackets the name of Component/variable
which we named exported it and then the file path.

```jsx
export const CDN_URL = "https://www.test.com";
export const LOGO_URL = "https://www.test1.com";

import { CND_URL, LOGO_URL } from "config/config.js";
```

**What is React Hooks?**

Its a normal javaScript function, you can say a utility function, it gives us powerful state variables.
There are multiple react hooks, But we are only going to talk about 2 very important powerful hooks.

- useState() - This gives us super powerful react variables;
- useEffect() - 

We have to import hooks from our React package and it will be a named import.
useState() returns us an array with with 2 variables, 1st is a current state variable and 2nd is a functionn which
updates a value of state variable

`import {useState} from "react";`

Difference between creating a normal variable and state variable.

```jsx
// This is how we create a normal variable.
let xyz = 0;

// This is how we update or modify a normal JS variable
xyz = 123


/**
 * This is how we create a state variable.
 * Whatever we pass to useState() function becomes a default value of xyz variable.
 * We call and name this variable as a normal JS variable
*/
let [xyz, setXyz] = useState(0);

/**
 * To update or modify the xyz variable, we will have to use the second parameter of the array which is a Function.
 * We can call and name this function as a normal function.
*/

setXyz(123) // This will update the value and state of xyz variable.

```

>Never update your state variable directly by using equal to sign `xyz = 1`

Whenever State variable is updated React will re-render that Component where the state variable is located.
For example we have a component called Body() and we have a state variable inside it.
Whenever we update a state variable using the setState() function our Body() component will be re-rendered.

```jsx

const Body =  () => {
  const [state, setState] = useState(0);

  return (
    setState(123);
  )
}

```

**Intro to useEffect() - A react hook**

useEffect() is also a react hook and this is also a plain javascript function at the end. To import this hook in our project we have to do a named import
`import {useEffect} from "react";`.
useEffect hook takes 2 arguments. 1st a callback function and 2nd a dependency array `useEffect( () => {}, [])`.
useEffect is called when our component is fully loaded and rendered. So whatever we pass inside useEffect's callback function it will be called after the component is rendered. 2nd argument is a dependency array in which we pass the dependency, it means now useEffect is dependent on the element which is passed inside the 2nd argument array, whenever the dependency changes useEffect will be called. if we pass nothing then it will be dependent on the component and now useEffect is called whenever the component is rendered or re-rendered. 
>2nd argument is a option argument.


> React is good at DOM manipulation, This is the core of react. Thats why we call React is fast.

**What is Virtual DOM?**

Its not an actual DOM, Virtual DOM is a reprsentation of an actual DOM.
It is a basically those React Elements which we have read above, Virtual DOM is nothing but a JavaScript object.
`console.log(<Body />)` this will show us an object inside the browser console, That object represents 
the actual DOM of Body() Component.


# Epsisode - 6


**Monolith Architechture**

This is a old way to develop web apps or a big size application, Where all the code API's and other services are written in a same project and when a small change needs to be made. A whole project needs to be compiled and deployed.

**Microservices Architechture**

In today's world we separated our applications in to small pieces, this is called microservices architecture. In microservices for example we have separate project or services for each element.


**Different Approaches of calling backend API's in React**

There are two ways of calling or communicating with backend API's.

- App loads -> call the API -> Render
- App loads -> Render -> call the API -> re-render

We will follow the 2nd approach in react, because this saves time and its a better approach in terms of UX.


# Episode - 7

**Routing in React**
 
 For routing in react we will be using a javascript npm package called "react-router-dom", In React, we navigate to different pages, those pages are nothing but a combination of components.
 Install react-router-dom using command `npm i react-router-dom`. React router dom provide us 2 items and we will named import them.
 1st is a function and 2nd is a React Component.
 `import {createBrowserRouter, RouterProvider} from "react-router-dom";`
 createBrowserRouter is a function which takes a list of configuration, a list of object where we define the path and the element which we want to render onto that path.

 ```jsx
 // This function takes an array as argument and array should contain list of objects.
 // In each object we have 2 properties, path: and element: in path we define our rout and in element we define our component 
 // which needs to be rendered
 
 const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />
    },
    {
        path: '/about',
        element: <About />
    }
])
 ```

 To render this configuration we use `<RouterProvider />` component in our main `render()` function and pass the routing configuration.

 ```jsx
 root.render(<RouterProvider router={routes}>)
 ```

**Link in react-router-dom**

react-router-dom provides us a component called `<Link></Link>`, if we use simple `<a href=""></a>` tag directly inside our react application, 
it will reload the webpage when click, So React provide this special component to load the components onto our webpage without reloading the whole tab. This component uses `to={}` attribute to define the path.

```jsx
<Link to={'/about'}>About US</Link>
```

 **Handle Error in Routes**

 To handle Error in our routes, react-router-dom provide us a hook called `useRoutError()`, 
 named import this hook in out project `import { useRouteError } from "react-router-dom";` and we can now use it as a simple function 
 `const err = useRouteError();`

Now to handle error in our path we will define a new property in our route configuration called `errorElement:` in this property we will pass out component which we want to render when we face an error in our routing.

 ```jsx
 const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <PageNotFound />
    },
    {
        path: '/about',
        element: <About />,
        errorElement: <PageNotFound />
    }
])
 ```

 **Route to component without reloading the header**

 To keep our header/footer intact whenever we route to different components, we use `children` property inside our `createBrowserRouter` config. we will be creating routes for our components as children of our main component. `children` property takes an array of objects, a list of paths to our components.
 To push our children into the place our main component gets render, we will use a Component provided by react router dom which is `<Outlet />`

 This `<Outlet />` component will be filled according to the paths defined in children property. So basically Outlet is a placeholder which gets replaced by the assigned component according to the path.

  ```jsx
 const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
          {
              path: '/',
              element: <UserList />,
              errorElement: <PageNotFound />
          }
          {
              path: '/about',
              element: <About />,
              errorElement: <PageNotFound />
          }
        ]
        errorElement: <PageNotFound />
    }
])

const AppLayout = () => {
    return (
        <div className="wrapper">
            <HeaderComponent />
            <Outlet />
        </div>
    )
};

 ```

**Read dynamic content in routes**

react-router-dom provides us a important hook called `useParams`. We can use this hook to read the dynamic paramters in our rout.


 # Episode - 8

 **Class based Components**

Class based component is a older way of creating components in react.
in React we create class based component by following this syntax `class <Name of Component> extends React.Component`.
`extends React.component` is a class which is given us by React, it tells React that this is a class based component.
In class based component we now have a `render()` method which returns a piece of jsx code.


Example of creating a class based component.
```jsx
import React from "react";

class About extends React.Component {
    constructor (props) {
        super(props)

        console.log(this.props)
    }

    render() {
        return (
            <div>
                About us {this.props.name}
            </div>
        )
    }
}

export default About;

<Abou name={"test"}>
```
In Class based components we must use `constructor()` and `super()` inside it becuase we are extending a React class which has already a constructor
by using super `this` scope is properly initlized and we can use `this.props` anywhere in our component.

**Creating and updating state variables, local variables in Class based component**

When a class based component is loaded and rendered onto the browser, a new instance has been created for that component and a constructor function is invoked. Constructor function is a best place to receive props and create a state variables, in functional component we use hooks to create state variables but in class based component there is a small difference in syntax to create state variables.
`this.state = {}` this syntax will be followed to create state variables, `this.state` is s reserved keyword in class base component.


```jsx

class About extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
          /**
           * state is a reserved keyword for creating state variables.
           * this is a big whole object which contans the state variables. 
          */
         count: 0,
         tap: 1
        }
    }

    render() {
      // To destructre our variables we will use this space e.g.  const {name} = this.props
        return (
            <div>
                About us {this.props.name}
                {this.state.count}
                {this.state.tap}
            </div>
        )
    }
}

```

To update state variables in class based component React gives us a special function called `this.setState()` which takes an object `{}` as an argument in which we pass our updated values to state variables like this. `this.setState( { count: this.state.count +1 } )`


**Lifecycle of Class based component | mounting/loading, update, unmounting**

Mounting and loading points to the same statement, it means that how a class based component is put up onto the browser.
There are sevrel lifecycle methos called before the component is rendered onto the browser. When a class based component is mounted, 
a new instance of a class is created and `contructor()` is called aftet that the `render()` method is called, right after render method `componentDidMount()` method is called.
In case of nested class based component how a life cycle of component mounting will work?
Methods will be called in following order.

> This is mounting lifecycle mentioned below

- Parent Counstructor -> Parent Render -> Child Constructor -> Child Render -> Child Did mount -> Parent Did mount.

-  Parent Counstructor -> Parent Render -> Child Constructor -> Child Render -> 2nd Child constructor -> 2nd Child render -> Child Did mount -> 2nd child did mount -> Parent did mount.


`componentDidMount()` method is important and works like `useEffect()`, we use this method to call an API inside our class based components. 

When we update the state variables using `this.setState()` update cycle is called. in this lifecycle React uses Dif algo and re-renders the component, in this life cycle constructor is not called only `render()` method is called. 
After update is done `componentDidUpdate()` is called.

> Never compare lifecycle of class based component from functional component, IT IS NOT THE SAME!

When we are moving to other component or a component is unmounting/removing from DOM, `componentWillUnMount()` is called.
We use this method to clean up the mess. in functional compnent useEffect hook there is a `return` keyword which returns a function.
in that function we write the code if we want to remove something when component is unmounting or removing.

```js
useEffect(() =>{
  return ()=> {
    // code to remove something on unmount, like time intervels etc.
  }
}, [])
```

# Episode - 9

Writig clean code and in a modular fashion is a good thing. We should follow the single responsibility principle. Every component in our App should have the single responsibility either it can be fetching the data or displaying something onto the UI. 


**Introduction to custom hooks**

Hooks are nothing but a simple javaScript functions, hooks are like helper functions which helps us to do the certin task.
We can create our own custom hooks in React. To represent the hook in React, normal we use `use` keyword along with the function name.
for example in react `useEffect` `useState` `useParam` `useRoutError`. To create our own custom hook we will follow the same convension like
`useSkillData()` 

```jsx
const useSkillData = () => {
// Fetch data of something here

return skillData;
}
``` 


**Chunking, code spliting, Dynamic bundling, Lazy Loading, On-demand loading, Dynamic import**

These terms belongs to a same process which is known as diving your code into small pieces and loading them when requested.
suppose we have a large application and inside that we have multiple small application for example a booking platform
which books your flights, hotels, trips etc. So booking platform is a whole big application and inside this we have multiple small applications
like booking flights, hotels, trips etc. Each of the booking process is different to each other.

In react our bundler Parcel bundles our code into a single file and loads its onto the browser. This is okay for small projects
but think if we have 1000 components and that single files contains the code of those 1000 components.
what will happens is our bundled file size will be increase and the applications will gets slower even if the file is minified.

Here comes the code spliting, lazy loading, chunking into the picture. 

see the example of [text](https://bookme.pk/)

consider booking a Bus is a small project and it contains 100 components
booking a flight is another a small project and it contains 100 components
booking a traing is another small project and it contains another 100 components.

So!! Bookeme.pk is a whole big project which contains a code of other 3 small projects along with its own code so in total consider
we have 500 components code in total in our single bundled file.
We are loading the code of 300 components altogather in our file even it is not required initially. This will make our application slower.

To reduce the bundled file size and keep the enough code to run bookme.pk intially and load the flight booking project's code seprately when needed, React introduced the `lazy()` loading.

We can lazy load our components and load them only when required. So our bundled file will not have the code of those components which are imported as `lazy()` inside our application. `lazy()` is a function which is provided to us by `react` and it takes a callback function which uses a `import()` function to import our component `import()` function takes the path of the file.

```jsx
import React from 'reat'

const BookTrain = lazy(()=> import('./component/BookTrain'))
const BookBus = lazy(()=> import('./component/BookBus'))

```

Now if we try to add this Component in our code like `<BookBus/>` it will not work.
by Importing a component as lazy what happens is our main bundled file has now excluded the code of these 2 components.
When we are on book a bus page a separate network call will be made and a separate file of BookBus.js will be loaded onto the browser, while the code is still laoding React will try to render that and it will cause error and it will suspend the rendering. To avoid that React recommends us to use `<Suspense/>` component provided by `react`.

We will wrap our component into `<Suspense/>` and assign a `fallback` to `<Suspense/>` component.
`fallback={}` takes a jsx code.

```jsx

const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: '/book-bus',
                element: <Suspense fallback={<div>Loading</div>}>
                          <BookBus />
                        </Suspense>,
            },
            {
                path: '/book-train',
                element: <Suspense fallback={<div>Loading</div>}>
                          <BookTrain />
                        </Suspense>,
            }
        ]
    }
])

```

What happens now is when we go to the `/book-bus` rout a separate network call will be made and code of book a bus component will be loaded onto the browser, This reduces the file size of our main file. This technique is known as lazy loading.
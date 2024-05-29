import { Component } from "react";
import About from "./About";

class About1 extends Component {
  constructor(props) {
    super(props);
    console.log("constructor 2 is called");
  }

  componentDidMount() {
    console.log("didmount 2 is called");
  }

  render() {
    console.log("render 2 is called");
    return <div></div>;
  }
}

export default About1;

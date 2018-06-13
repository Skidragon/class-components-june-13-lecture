import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//CCR - Create Class, Call your Constructor, render method
class App extends React.Component {
  // step 1, declare your class
  constructor() {
    // step 2, call your constructor
    super();
  }

  render() {
    //step 3, render must be called
    return <h2>Hello CodeSandbox</h2>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

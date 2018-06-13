import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//Class Component
//CCR - Create Class, Call your Constructor, render method
class App extends React.Component {
  // step 1, declare your class
  constructor() {
    // step 2, call your constructor
    super();
    this.state = {
      greeting: `Hello Sandbox`,
      bands: ["Guster", "Modest Mouse", "CCR", "Skynard", "Led Zepplin"]
    };
  }

  render() {
    //step 3, render must be called
    return [
      <h2 key="item1">{this.state.greeting}</h2>,
      <div key="item2">Guster</div>,
      <div key="item3">Modest Mouse</div>
    ];
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

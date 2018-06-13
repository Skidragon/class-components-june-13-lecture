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
      bands: [
        "Guster",
        "Guster",
        "Modest Mouse",
        "CCR",
        "Skynard",
        "Led Zepplin"
      ]
    };
  }

  render() {
    //step 3, render must be called
    //When there is change in the state then it re-renders
    return (
      <div>
        <h2>{this.state.greeting}</h2>
        //The keys have to be unique
        <ul>{this.state.bands.map((band, i) => <li key={band}>{band}</li>)}</ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

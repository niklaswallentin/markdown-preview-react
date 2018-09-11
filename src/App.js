import React, { Component } from "react";
import MarkDownPreviewer from "./containers/MarkDownPreviewer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkDownPreviewer />
      </div>
    );
  }
}

export default App;

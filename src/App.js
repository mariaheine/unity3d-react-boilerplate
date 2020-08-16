import React, { Component } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import Panel from "./content/Panel.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };

    this.unityContent = new UnityContent(
      "CookieEater/Build/CookieEater.json",
      "CookieEater/Build/UnityLoader.js"
    );

    this.unityContent.on("loaded", () => {
      this.setState({
        isLoaded: true,
      });
    });
  }

  onMouseMove(e) {
    let mouseCoords = `${e.pageX} ${e.pageY}`;

    if (this.state.isLoaded === true) {
      this.unityContent.send(
        "TextDisplayer",
        "UpdateDoubleMousePosition",
        mouseCoords
      );
    }
  }

  render() {
    var contents = this.state.isLoaded ? (
      <div>
        <Panel unityContent={this.unityContent} />
        <div className="App-info">
          <p>Use WSAD keys to fly around.</p>
        </div>
      </div>
    ) : <div className="App-intro"><h1>Loading</h1></div>;

    return (
      <div className="App" onMouseMove={this.onMouseMove.bind(this)}>
        <div className="App-container">
          <Unity unityContent={this.unityContent} width="100%" height="100%" />
          {contents}
        </div>
      </div>
    );
  }
}

export default App;

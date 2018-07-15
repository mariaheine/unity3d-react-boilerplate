import React, { Component } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      isLoaded: false
    };

    this.unityContent = new UnityContent(
        "UnityBuild/Build/UnityBuild.json",
        "UnityBuild/Build/UnityLoader.js"
      );

    this.unityContent.on("loaded", () => {
      this.setState({
        isLoaded: true
      });
    });

    this.unityContent.on("CookieEaten", () => {
      console.log("cookie yummy");
    })
  }

  onClick() {
    this.unityContent.send(
      "FlyCube", 
      "Randomize"
    );
  }

  // _onMouseMove(e) {
  //   this.setState({ x: e.screenX, y: e.screenY });
  //   this.unityContent.send(
  //     "TextDisplayer", 
  //     "UpdateMousePosition", 
  //     20
  //   );
  // }

  render() {
    

    const { x, y} = this.state;
    // onMouseMove={this._onMouseMove.bind(this)}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-container">
          <button onClick={this.onClick.bind(this)}>Randomize!</button>
          <Unity unityContent={this.unityContent} width="1024px" height="576px"/>
        </div>
        <div className="App-footer">
          {this.state.isLoaded === false && <div>{"Loading..."}</div>}
        </div>
      </div>
    );
  }
}

export default App;

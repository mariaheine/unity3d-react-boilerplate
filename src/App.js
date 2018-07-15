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
      isLoading: true
    };

    this.unityContent = new UnityContent(
        "UnityBuild/Build/UnityBuild.json",
        "UnityBuild/Build/UnityLoader.js"
      );

    this.unityContent.on("loaded", () => {
      this.setState({
        isLoading: false
      });
    })
  }

  onClick() {
    this.unityContent.send(
      "Cube (1)", 
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
        {this.state.isLoading === true && <div>{"Loading..."}</div>}
        <button onClick={this.onClick.bind(this)}>Randomize!</button>
        <Unity unityContent={this.unityContent} />
        <h1>{ x }</h1>
        <h1>{ y }</h1>
      </div>
    );
  }
}

export default App;

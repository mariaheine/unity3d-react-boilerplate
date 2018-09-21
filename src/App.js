import React, { Component } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";


import RandomColourButton from './content/PanelComponents/RandomColourButton.js'
import Panel from './content/Panel.js'

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
      "UnityBuild/Build/UnityBuild2.json",
      "UnityBuild/Build/UnityLoader.js"
    );

    this.unityContent.on("loaded", () => {
        // WELL DON'T COUNT ON THIS
        this.setState({
          isLoaded: true
        });
    });
  }

  _onMouseMove(e) {
    let mouseCoords = `${e.pageX} ${e.pageY}`;

    if(this.state.isLoaded === true) {
      this.unityContent.send(
        "TextDisplayer", 
        "UpdateDoubleMousePosition",
        mouseCoords
      );
    };  
  }

  render() {

    const { x, y } = this.state;
    
    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)} >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-container">
          
          <Panel unityContent={this.unityContent}/>
          <Unity unityContent={this.unityContent} width="1024px" height="576px"/>

        </div>        
      </div>
    );
  }
}

export default App;

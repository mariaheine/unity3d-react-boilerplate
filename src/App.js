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
      isLoaded: false,
      cookieSpawnQuantity: 1,
      cookiesEaten: 0
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

    this.unityContent.on("CookieEatenEvent", () => {
      this.setState((prevState) => ({
        cookiesEaten: prevState.cookiesEaten + 1
      }))
    })
  }

  onClickColour() {
    this.unityContent.send(
      "FlyCube", 
      "Randomize"
    );
  }

  onClickSpawn() {
    this.unityContent.send(
      "PlayArea", 
      "SpawnCube",
      this.state.cookieSpawnQuantity
    );
    this.unityContent.send(
      "ReactToUnityManager", 
      "UnlockWebGLInput"
    );
  }

  onSpawnerCountChange = (event) => {
    this.setState({
      cookieSpawnQuantity: parseInt(event.target.value)
    });
  }

  onSpawnerCountClick = (event) => {
    this.unityContent.send(
      "ReactToUnityManager", 
      "LockWebGLInput"
    );
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });

    //console.log(`${this.state.x} ${this.state.y}`);

    if(this.state.isLoaded === true) {
      this.unityContent.send(
        "TextDisplayer", 
        "UpdateMousePosition", 
        this.state.x
      );
    };

    if(this.state.isLoaded === true) {
    }     
  }

  render() {
    

    const { x, y} = this.state;
    // 
    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-container">
          <div className="App-panel">

            <button onClick={this.onClickColour.bind(this)}>Cube colour!</button>

            <div className="Panel-spawner">
              <input 
                type="number" 
                value={this.state.cookieSpawnQuantity} 
                onClick={this.onSpawnerCountClick}
                onChange={this.onSpawnerCountChange}/>
              <button onClick={this.onClickSpawn.bind(this)}>Get cookies!</button>
            </div>

            <div className="Panel-score">
              <p>Cookies Eaten</p>
              <p>{this.state.cookiesEaten}</p>
            </div>

            <div className="Panel-loader">
                {this.state.isLoaded === false && <p>{"Loading..."}</p>}
            </div> 

          </div>
          <Unity unityContent={this.unityContent} width="1024px" height="576px"/>
        </div>
        
      </div>
    );
  }
}

export default App;

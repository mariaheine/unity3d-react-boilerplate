import React, { Component } from 'react';

class CookieBaker extends Component {
	constructor(props) {
		super(props);

		this.state = {
    		cookieSpawnQuantity: 100
    };

    props.unityContent.on("CookieEatenEvent", () => {
    	this.setState((prevState) => ({
     		cookiesEaten: prevState.cookiesEaten + 1
    	}))
    })

    props.unityContent.on("loaded", () => {
    	this.props.unityContent.send(
        "PlayArea", 
        "SpawnCube",
        15
      );
    })
	}

  // React to Unity II
  // A bit more advanced example that sends numerical parameter along with the function call
  _onSpawnerCountClick = (event) => {
    this.props.unityContent.send(
      "ReactToUnityManager", 
      "LockWebGLInput"
    );
  }

  _onSpawnerCountChange = (event) => {
    this.setState({
      cookieSpawnQuantity: parseInt(event.target.value, 10)
    });
  }

  _onClickSpawn() {
    this.props.unityContent.send(
      "PlayArea", 
      "SpawnCube",
      this.state.cookieSpawnQuantity
    );

    // Without it keyboard signals would be consumed by unity
    this.props.unityContent.send(
      "ReactToUnityManager", 
      "UnlockWebGLInput"
    );
  }

	render() {

		return(
			<div className="Panel-spawner">
        <input 
          type="number" 
          value={this.state.cookieSpawnQuantity} 
          onClick={this._onSpawnerCountClick}
          onChange={this._onSpawnerCountChange}/>

        <button className="whiteButton" onClick={this._onClickSpawn.bind(this)}>Get cookies!</button>       
      </div>
		);
	}
}

export default CookieBaker;


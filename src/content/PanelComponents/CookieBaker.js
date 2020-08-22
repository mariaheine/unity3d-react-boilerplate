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

  // Without it keyboard signals would be consumed by unity and we wouldn't be able
  // to type in the cookie spawn count. Afterwards we need to unlock it so we can
  // controll the flying cube. For more see WebGLInputManager.cs script
  onSpawnerCountClick = () => {
    this.props.unityContent.send(
      "ReactToUnityManager", 
      "LockWebGLInput"
    );
  }

  onSpawnerCountChange = (event) => {
    this.setState({
      cookieSpawnQuantity: parseInt(event.target.value, 10)
    });
  }

  onClickSpawn = () => {
    this.props.unityContent.send(
      "PlayArea", 
      "SpawnCube",
      this.state.cookieSpawnQuantity
    );

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
          onClick={this.onSpawnerCountClick}
          onChange={this.onSpawnerCountChange}/>

        <button className="whiteButton" onClick={this.onClickSpawn.bind(this)}>Get cookies!</button>       
      </div>
		);
	}
}

export default CookieBaker;


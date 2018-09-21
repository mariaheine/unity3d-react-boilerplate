import React, { Component } from 'react';

class UnityLoader extends Component {
	constructor(props) {
		super(props);

		this.state = {
      		isLoaded: false
    	};

    	props.unityContent.on("loaded", () => {
      		this.setState({
        		isLoaded: true
      		});
    	});
	}

	render() {

		return(
			<div className="Panel-loader">
               	{this.state.isLoaded === false && <p>{"Loading..."}</p>}
            </div>
		);
	}
}

export default UnityLoader;


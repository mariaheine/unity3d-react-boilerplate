import React from 'react';

// React to Unity I
// Example of calling Unity function from javascipt
const onClickColour = (unity) => {
	unity.send(
      "FlyCube", 
      "Randomize"
     );
};

const RandomColourButton = props => {
	return(
		<button onClick={(e) => onClickColour(props.unityContent)}>Change Cube colour!</button>
	);
};

export default RandomColourButton;
import React from 'react';

import RandomColourButton from './PanelComponents/RandomColourButton.js';
import UnityLoader from './PanelComponents/UnityLoader.js';
import Score from './PanelComponents/Score.js';
import CookieBaker from './PanelComponents/CookieBaker.js';

const Panel = props => {
	return(
		<div className="App-panel">
			<RandomColourButton unityContent={props.unityContent}/>
			<CookieBaker unityContent={props.unityContent}/>
			<Score unityContent={props.unityContent}/>
			<UnityLoader unityContent={props.unityContent}/>
		</div>
	);
}

export default Panel;


import React from 'react';
import {RaisedButton} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

export default class HomePage extends React.Component {

	static path = '/';

	render(){
		return (
			<div>
				<RaisedButton label="lalla"/>
			</div>
		)
	}
}

import React, { Component } from 'react';
import style from './style.scss';
import { Container } from 'semantic-ui-react';

export default class page404 extends Component {
	constructor(props){
		super(props);
	}

	static path = '*';

	render(){
		return(
			<Container>
				Not found 404!!!
			</Container>
		)
	}
}

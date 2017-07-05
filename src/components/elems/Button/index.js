import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

export default class dropdown extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(e){
		console.log(e);
	}
}

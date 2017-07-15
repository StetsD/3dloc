import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import style from './style.scss';

export default class BlogPage extends Component{
	constructor(props){
		super(props);
	}

	static path = '/blog'

	render(){
		return(
			<Container>
				It is blog mazafaka
			</Container>
		)
	}
}

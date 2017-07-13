import React, {Component} from 'react';
import {Item, Grid, Container, Icon} from 'semantic-ui-react';
import style from './style.scss';

var map = new Map();

export default class AboutPage extends Component {
	constructor(props){
		super(props);
	}

	static path = '/about';

	render(){
		return (
			<section className="about-page">
				mazafaka
			</section>
		)
	}
}

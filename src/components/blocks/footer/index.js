import React, {Component} from 'react';
import {Grid, Segment, Header, Icon, Button} from 'semantic-ui-react';
import style from './style.scss';

export default class Footer extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<footer className="footer">
				<Segment basic floated="left">
					<a href="/">
						<Header as='h2'>
							<Icon name='settings' />
							<Header.Content>
								3DLoc
								<Header.Subheader>
									Геолокатор 3D печати
								</Header.Subheader>
								<Header.Subheader>
									<span className="footer__copy">Все права защищены</span>
								</Header.Subheader>
							</Header.Content>
						</Header>
					</a>
				</Segment>
				<Segment className="footer__networks" basic floated="right">
					<a href="#"><Button color='facebook' icon='facebook' /></a>
					<a href="#"><Button color='twitter' icon='twitter' /></a>
					<a href="#"><Button color='google plus' icon='google plus' /></a>
					<a href="#"><Button color='vk' icon='vk' /></a>
				</Segment>
			</footer>
		)
	}
}

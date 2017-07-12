import React, {Component} from 'react';
import {Grid, Segment, Header, Icon, Divider} from 'semantic-ui-react';

export default class Footer extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<footer>
				<Segment floated="left">
					<a href="/">
						<Header as='h2'>
							<Icon name='settings' />
							<Header.Content>
								3DLoc
								<Header.Subheader>
									Геолокатор 3D печати
								</Header.Subheader>
							</Header.Content>
						</Header>
					</a>
				</Segment>
				<Segment floated="right">
					<Divider vertical>Or</Divider>
				</Segment>
			</footer>
		)
	}
}

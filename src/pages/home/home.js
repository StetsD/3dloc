import React, {Component} from 'react';
import {Filters, ItemStudio} from '../../components/blocks';
import Map from '../../components/blocks/map';
import {Item, Grid, Container, Icon} from 'semantic-ui-react';
import style from './style.scss';
import studios from '../../data/studios';

import studioImg1 from '../../temp/img/studio-item-1.png';
import studioImg2 from '../../temp/img/studio-item-2.png';
import studioImg3 from '../../temp/img/studio-item-3.png';
import studioImg4 from '../../temp/img/studio-item-4.png';

var map = new Map();

export default class HomePage extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		map.init().geolocation();
	}

	static path = '/';

	render(){
		let x = 0;
		return (
			<section className="home-page">
				<Filters handleClickUser={this.props.handleClickUser}/>
				<div id="map" className="home-page__g-map"></div>
				<Grid doubling stackable>
					<Grid.Column largeScreen="16" widescreen="16" tablet="16">
						<Container className='home-page__studio-wrapper'>
							<Item.Group divided>
								{studios.map(studio => <ItemStudio key={studio.id} {...studio}/>)}
							</Item.Group>
							<Icon className="home-page__refresh" name='refresh' size='huge'/>
						</Container>
					</Grid.Column>
				</Grid>

			</section>
		)
	}
}

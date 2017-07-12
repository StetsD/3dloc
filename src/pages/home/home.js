import React, {Component} from 'react';
import {Filters, ItemStudio} from '../../components/blocks';
import Map from '../../components/blocks/map';
import {Item} from 'semantic-ui-react';
import style from './style.scss';

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
		console.log(map)
	}

	static path = '/';

	render(){
		let x = 0;
		return (
			<div>
				<Filters handleClickUser={this.props.handleClickUser}/>
				<div id="map" className="g-map"></div>
				<Item.Group divided>
					<ItemStudio img={studioImg1}/>
					<ItemStudio img={studioImg2}/>
					<ItemStudio img={studioImg3}/>
					<ItemStudio img={studioImg4}/>
			    </Item.Group>
			</div>
		)
	}
}

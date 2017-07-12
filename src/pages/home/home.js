import React, {Component} from 'react';
import Filters from '../../components/blocks/filters';
import Map from '../../components/blocks/map';
import style from './style.scss';

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
		return (
			<div>
				<Filters handleClickUser={this.props.handleClickUser}/>
				<div id="map" className="g-map"></div>
			</div>
		)
	}
}

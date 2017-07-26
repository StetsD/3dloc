import React, {Component, PropTypes} from 'react';
import {Filters, ItemStudio} from '../../components/blocks';
import Map from '../../components/blocks/map';
import {Item, Grid, Container, Icon} from 'semantic-ui-react';
import style from './style.scss';
import {connect} from 'react-redux';
import {getStudios} from './actions';
import {bindAll} from 'lodash';

var map = new Map();

class HomePage extends Component {
	constructor(props){
		super(props);
		bindAll(this, ['getStudios']);
	}

	componentDidMount(){
		map.init().geolocation(); 
	}

	getStudios(){

	}

	static path = '/';
	static propTypes = {
		home: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	render(){
		let x = 0;
		let {studios} = this.props.home;
		return (
			<section className="home-page">
				<Filters handleClickUser={this.props.handleClickUser}/>
				<div id="map" className="home-page__g-map"></div>
				<Grid doubling stackable>
					<Grid.Column largeScreen="16" widescreen="16" tablet="16">
						<Container className='home-page__studio-wrapper'>
							<Item.Group divided>
								{this.props.home.studios.map(studio => <ItemStudio key={studio.id} {...studio}/>)}
							</Item.Group>
							<Icon className="home-page__refresh" name='refresh' size='huge'/>
						</Container>
					</Grid.Column>
				</Grid>

			</section>
		)
	}
}

function mapStateToProps(state){
	return {
		home: state.home
	}
}

export default connect(mapStateToProps)(HomePage);

import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import style from './style.scss';
import data from '../../data/studios';
import {findIndex} from 'lodash';

import {connect} from 'react-redux';

class Studio extends Component{
    constructor(props){
        super(props);
    }

    static path = '/studios/:id'

	getStudioInfo(location){
		let id = +location.replace(/\/studios\//g, '');
		return data[findIndex(data, {id})];
	}

    render(){
		const {description, id, img, rating, tags, title} = this.getStudioInfo(this.props.location.pathname);
        return(
            <Container className='studio-page'>
                <Header>{title} - {id}</Header>
				<p>{description}</p>
				<p>{img}</p>
				<p>{tags}</p>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        id: state.id,
        title: state.title,
        img: state.img,
        description: state.description,
        address: state.address,
        rating: state.rating
    };
}

export default connect(mapStateToProps)(Studio);

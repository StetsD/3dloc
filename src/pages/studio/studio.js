import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import style from './style.scss';
import axios from 'axios';
import {findIndex} from 'lodash';

import {connect} from 'react-redux';

class Studio extends Component{
    constructor(props){
        super(props);
    }

    static path = '/studios/:id'

	getStudioInfo(location){
		let id = +location.replace(/\/studios\//g, '');
		
		axios.get(`/studios/${1}/?id=1`)
		.then((data)=>{
			console.log(data);
		})

		// return data[findIndex(data, {id})];
	}

    render(){
		this.getStudioInfo(this.props.location.pathname);
		// const {description, id, img, rating, tags, title} = this.getStudioInfo(this.props.location.pathname);
        return(
			<div>TEST</div>
            // <Container className='studio-page'>
                // <Header>{title} - {id}</Header>
				// <p>{description}</p>
				// <p>{img}</p>
				// <p>{tags}</p>
            // </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        // id: state.id,
        // title: state.title,
        // img: state.img,
        // description: state.description,
        // address: state.address,
        // rating: state.rating
    };
}

export default connect(mapStateToProps)(Studio);

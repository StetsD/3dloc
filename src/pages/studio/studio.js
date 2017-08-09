import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import style from './style.scss';
import axios from 'axios';
import {findIndex} from 'lodash';

import {connect} from 'react-redux';

class Studio extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
        	title: '',
        	description: '',
        	phone: '',
        	address: '',
        	email: '',
        	logo: '',
        	rating: '',
        	tags: '',
        	messages: '',
        	orders: ''
        }
    }

    static path = '/studios/:id'

	getStudioInfo(location){
        let id = +location.replace(/\/studios\//g, '').replace(/\//g, '');
        let studio;
        axios({
            method: 'get',
            url: `/studios/${id}/?id=${id}`,
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            responseType: 'json'
        }).then((data)=>{
            studio = data.data[0];
            this.setState(data.data[0]);
        });
	}

    componentDidMount(){
        this.getStudioInfo(this.props.location.pathname)
    }

    render(){
        // console.log()
		// const {description, id, img, rating, tags, title} = this.getStudioInfo(this.props.location.pathname);

        return(
            <Container className='studio-page'>
                <Header>{this.state.title} - {this.state.id}</Header>
                <p>{this.state.description}</p>
                <img src={this.state.logo}/>
                <p>{this.state.tags}</p>
            </Container>
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

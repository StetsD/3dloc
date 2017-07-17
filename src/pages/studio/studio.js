import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import style from './style.scss';

import {connect} from 'react-redux';

class Studio extends Component{
    constructor(props){
        super(props);
    }

    static path = '/studios/:id'

    render(){
        return(
            <Container className='studio-page'>
                <Header>This is Studio</Header>
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

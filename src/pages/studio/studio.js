import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import style from './style.scss';

export default class Studio extends Component{
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

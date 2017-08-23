import React, {Component} from 'react';
import {Container, Header, Image, Button, Icon, Rating} from 'semantic-ui-react';
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
        return(
            <Container className='studio-page'>
                <div className="studio-page__main-banner">
                    <Image fluid src="/img/src/pages/my-studio/studio.jpg" />
                    <div className='studio-page__info'>
                        <div className="studio-page__inner-info">
                            <img className="studio-page__logo" src={this.state.logo}/>
                            <div>
                                <Header className="studio-page__title">{this.state.title}</Header>
                                <p className="studio-page__tags">{this.state.tags}</p>
                            </div>
                        </div>

                        <div className="studio-page__adress">
                            <h2>Адрес:</h2>
                            {this.state.address}
                        </div>
                        <div className="studio-page__email">
                            <h2>Почта:</h2>
                            {this.state.email}
                        </div>
                        <div className="studio-page__phone">
                            <h2>Телефон:</h2>
                            {this.state.phone}
                        </div>
                        <div className="studio-page__rating">
                            Рейтинг {this.state.rating ? <Rating disabled icon='star' defaultRating={this.state.rating} maxRating={5}/> : null}
                        </div>
                    </div>
                </div>
                <div className="studio-page__controls">
                    <Button className="profile-page__section-button" color="green" animated>
                        <Button.Content hidden>Заказать</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                    <h2>Портфолио:</h2>
                    <div className="studio-page__gallery">
                        <img src="/img/src/pages/my-studio/studio.jpg"/>
                        <img src="/img/src/pages/my-studio/studio.jpg"/>
                        <img src="/img/src/pages/my-studio/studio.jpg"/>
                        <img src="/img/src/pages/my-studio/studio.jpg"/>
                        <img src="/img/src/pages/my-studio/studio.jpg"/>
                    </div>
                </div>
                <h2>Описание:</h2>
                <p>{this.state.description}</p>

            </Container>
        )
    }
}

function mapStateToProps(state){
    return {};
}

export default connect(mapStateToProps)(Studio);

import React, {Component} from 'react';
import {Container, Form, Input, Card, Image, Button, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import Img from './britva.jpg';
import style from './style.scss';


class ProfilePage extends Component{
	constructor(props){
		super(props);
	}

	static path = '/profile'

	render(){
		return(
			<Container className="profile-page">
				<Form className="profile-page__form">
					<Card>
						<Image src={Img} />
						<Card.Content>
							<Card.Header>Борис Иваныч Бритва</Card.Header>
							<Card.Description>23 Заказа</Card.Description>
							<Card.Meta>3 заявки</Card.Meta>
						</Card.Content>
					</Card>
					<Form.Group widths='equal'>
						<Form.Field>
							<label>Имя</label>
							<Input placeholder="Ваше имя" value="Борис Иваныч"/>
						</Form.Field>
						<Form.Field>
							<label>Фамилия</label>
							<Input placeholder="Ваша Фамилия" value="Бритва"/>
						</Form.Field>
						<Form.Field>
							<label>Email</label>
							<Input placeholder="Email" value="boris-britva@inbox.com" disabled/>
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field>
							<Button>Сменить Email</Button>
						</Form.Field>
						<Form.Field>
							<Button>Сменить Пароль</Button>
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field>
							<Button className="profile-page__section-button" color="green" animated>
								<Button.Content hidden>Заказы</Button.Content>
								<Button.Content visible>
									<Icon name='shop' />
								</Button.Content>
							</Button>
						</Form.Field>
						<Form.Field>
							<Button className="profile-page__section-button" color="green" animated>
								<Button.Content hidden>Сообщения</Button.Content>
								<Button.Content visible>
									<Icon name='commenting outline' />
								</Button.Content>
							</Button>
						</Form.Field>
						<Form.Field>
							<Button color="black" animated>
								<Button.Content hidden>Выйти</Button.Content>
								<Button.Content visible>
									<Icon name='right arrow' />
								</Button.Content>
							</Button>
						</Form.Field>
					</Form.Group>

				</Form>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		profile: state.profile
	}
}

export default connect(mapStateToProps)(ProfilePage);

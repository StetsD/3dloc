import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Form, Input, Card, Image, Button, Icon, TextArea, Rating, Checkbox} from 'semantic-ui-react';
import Img from './studio.jpg';
import imgStudio from './studio-item-4.png';
import style from './style.scss';

class MyStudioPage extends Component {
	constructor(props){
		super(props);
	}

	static path = '/my-studio';

	render(){
		return(
			<Container className="my-studio-page">
				<Form className="my-studio-page__form">
					<div className="my-studio-page__main-banner">
						<Image fluid src={Img} />
					</div>
					<Form.Group widths='equal'>
						<Form.Field>
							<Card>
								<Image src={imgStudio} />
								<Card.Content>
									<Card.Header>Борис Иваныч Бритва</Card.Header>
									<Card.Description>23 Заказа</Card.Description>
									<Card.Meta>3 заявки</Card.Meta>
								</Card.Content>
							</Card>
							<div className="my-studio-page__tags">
	                            Ваш Рейтинг <Rating disabled icon='star' defaultRating={3} maxRating={5}/>
	                        </div>
							<div>
								<Checkbox label='Формы для выпечки'/><br/>
								<Checkbox label='Скульптуры'/><br/>
								<Checkbox label='Проектирование'/><br/>
								<Checkbox label='Механизмы'/><br/>
								<Checkbox label='Для промышленности'/><br/>
							</div>
						</Form.Field>
						<Form.Field>
							<label>Название</label>
							<Input value="Студия Бориса"/><br/><br/>
							<label>Описание</label>
							<TextArea className="my-studio-page__desc" defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." /><br/><br/>
							<label>Телефон</label>
							<Input value="8 909 099 69 99"/><br/><br/>
							<label>Адресс</label>
							<Input value="Российская Федерация, Санкт Петербург, Металистов, 2к1"/><br/><br/>
							<label>Email</label>
							<Input value="BorisStudio@inbox.com"/><br/><br/>
							<Button className="profile-page__section-button" color="green" animated>
								<Button.Content hidden>Заявки</Button.Content>
								<Button.Content visible>
									<Icon name='shop' />
								</Button.Content>
							</Button>
							<Button className="profile-page__section-button" color="green" animated>
								<Button.Content hidden>Сообщения</Button.Content>
								<Button.Content visible>
									<Icon name='commenting outline' />
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
		myStudio: state.myStudio
	}
}

export default connect(mapStateToProps)(MyStudioPage);

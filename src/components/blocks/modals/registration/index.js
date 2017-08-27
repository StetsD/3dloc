import React, {Component} from 'react';
import {Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react';
import {Link} from 'react-router';
import style from './style.scss';
import bindAll from 'lodash';

export default class modalLogin extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
		$(window).on('keyup', e => {
            e.keyCode == 27 && this.props.enable ? this.props.toggleModal() : null;
		});
	}

    render(){
        return(
            <Modal className="modal-reg" size="small" open={this.props.enable}>
                <i aria-hidden="true" className="close icon"><Link to="/" className="main-page__close-link"></Link></i>
                <Modal.Header>Регистрация</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <label>Имя</label>
                                <input type="text" name="name" placeholder='Имя' />
                            </Form.Field>
                            <Form.Field>
                                <label>Фамилия</label>
                                <input type="text" name="lastname" placeholder='Фамилия' />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input type="text" name="email" placeholder='Email' />
                            </Form.Field>
                            <Form.Field>
                                <label>Пароль</label>
                                <input type="password" name="password" placeholder='Пароль' />
                            </Form.Field>
                            <Form.Field>
                                <label>Повторите пароль</label>
                                <input type="password" name="password2" placeholder='Повторите пароль' />
                            </Form.Field>
                            <Button type='submit'>Зарегистрироваться</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

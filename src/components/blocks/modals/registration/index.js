import React, {Component} from 'react';
import {Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react';
import {Link} from 'react-router';
import style from './style.scss';
import bindAll from 'lodash';
import FormVal from '@adwatch/form';

export default class modalLogin extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
		$(window).on('keyup', e => {
            e.keyCode == 27 && this.props.enable ? this.props.toggleModal() : null;
		});
	}

    componentDidUpdate(){
        if($('#form-reg').length){
            let form = new FormVal({
                $blockForm: '#form-reg',
                setErrors: {targetParent: '.form__group', targetError: '.form__msg'},
                filters: true,
                ajaxBody: {
                    type: 'method',
                    url: 'action',
                    data: 'serialize'
                }
            }).init();
        }
    }

    render(){
        return(
            <Modal className="modal-reg" size="small" open={this.props.enable}>
                <i aria-hidden="true" className="close icon"><Link to="/" className="main-page__close-link"></Link></i>
                <Modal.Header>Регистрация</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form id="form-reg" method="POST" action="/registration">
                            <Form.Field className="form__group">
                                <label>Имя</label>
                                <input type="text" name="name" placeholder='Имя' data-validation="required" data-f="oC"/>
                                <div className="form__msg"></div>
                            </Form.Field>
                            <Form.Field className="form__group">
                                <label>Фамилия</label>
                                <input type="text" name="lastname" placeholder='Фамилия' />
                                <div className="form__msg"></div>
                            </Form.Field>
                            <Form.Field className="form__group">
                                <label>Email</label>
                                <input type="text" name="email" placeholder='Email' data-validation="email"/>
                                <div className="form__msg"></div>
                            </Form.Field>
                            <Form.Field className="form__group">
                                <label>Пароль</label>
                                <input type="password" name="password" placeholder='Пароль' data-validation="required"/>
                                <div className="form__msg"></div>
                            </Form.Field>
                            <Form.Field className="form__group">
                                <label>Повторите пароль</label>
                                <input type="password" name="password2" placeholder='Повторите пароль' data-validation="required"/>
                                <div className="form__msg"></div>
                            </Form.Field>
                            <Button type='submit'>Зарегистрироваться</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

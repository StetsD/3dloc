import React, {Component} from 'react';
import {Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react';
import {Link} from 'react-router';
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
        if($('#form-login').length){
            let form = new FormVal({
                $blockForm: '#form-login',
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
            <Modal size="small" open={this.props.enable}>
				<i aria-hidden="true" className="close icon"><Link to="/" className="main-page__close-link"></Link></i>
                <Modal.Header>Аторизация</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form id="form-login" method="POST" action="/login">
                            <Form.Field className="form__group">
                                <label>Email</label>
                                <input type="text" name="email" placeholder='Email' data-validation="email"/>
								<div className="form__msg"></div>
                            </Form.Field>
                            <Form.Field className="form__group">
                                <label>Password</label>
                                <input type="password" name="password" placeholder='Password' data-validation="required"/>
								<div className="form__msg"></div>
                            </Form.Field>
                            <Form.Field>
                              <Checkbox label='Запомнить меня' />
                            </Form.Field>
                            <Button type='submit'>Войти</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

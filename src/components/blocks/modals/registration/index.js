import React, {Component} from 'react';
import {Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react';

export default class modalLogin extends Component {

    constructor(props){
        super(props);

        this.state = {
            enable: false
        }
    }

    componentDidMount(){
        $('.modal-reg i.close.icon').on('click', e => {
            console.log(this)
        });
    }

    render(){
        
        return(
            <Modal className="modal-reg" size="small" closeIcon='close' dimmer={this.state.enable} open={this.state.enable}>
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

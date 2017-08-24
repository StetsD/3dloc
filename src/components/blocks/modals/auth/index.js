import React, {Component} from 'react';
import {Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react';

export default class modalLogin extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal size="small" closeIcon={true} dimmer={this.props.enable} open={this.props.enable}>
                <Modal.Header>Аторизация</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <label>Email</label>
                                <input type="text" name="email" placeholder='Email' />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input type="password" name="password" placeholder='Password' />
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

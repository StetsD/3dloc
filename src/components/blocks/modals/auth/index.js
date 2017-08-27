import React, {Component} from 'react';
import {Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react';
import {Link} from 'react-router';

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
            <Modal size="small" open={this.props.enable}>
				<i aria-hidden="true" className="close icon"><Link to="/" className="main-page__close-link"></Link></i>
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

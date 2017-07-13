import React, { Component } from 'react';
import { Button, Segment, Dropdown, Sidebar, Menu, Image, Icon, Header } from 'semantic-ui-react';
import Filters from '../filters';
import HomePage from '../../../pages/home/home';
import style from './style.scss';

export default class SidebarLeftUncover extends Component {

    constructor(props){
        super(props);

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    state = { visible: false }

    toggleVisibility(){
        this.setState({ visible: !this.state.visible });
    }

	componentDidMount(){
		$(window).on('keyup', e => {
			e.keyCode == 27 && this.state.visible ? this.toggleVisibility() : false;
		});
	}

    render(){
        const { visible } = this.state;
        let richChildren = React.Children.map(this.props.children, child => {
            if(child.type == HomePage){
                return React.cloneElement(child, {
                    handleClickUser: this.toggleVisibility
                });
            }else{
                return child;
            }
        });

        return (
            <div>
                <Sidebar.Pushable  as={Segment}>
                    <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon="labeled" vertical inverted>
                        <Menu.Item className="sidebar__item" name='user outline'>
                            <Icon name="user outline"/>
                            Профиль
                        </Menu.Item>
                        <Menu.Item className="sidebar__item" name="lab">
                            <Icon name='lab'/>
                            Студия
                        </Menu.Item>
                        <Menu.Item className="sidebar__item" name='log out'>
                            <Icon name='log out'/>
                            Выйти
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        {richChildren}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

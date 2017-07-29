import React, { Component } from 'react';
import { Button, Segment, Dropdown, Sidebar, Menu, Image, Icon, Header } from 'semantic-ui-react';
import { Link } from 'react-router';
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
        this.props.enableSidebar();
        this.setState({ visible: !this.state.visible });
    }

	componentDidMount(){
		// $(window).on('keyup', e => {
		// 	e.keyCode == 27 && this.state.visible ? this.toggleVisibility() : false;
		// });
	}

    render(){
        const { sidebarVisibility } = this.props;
        let richChildren = React.Children.map(this.props.children, child => {
            if(child.type == HomePage){
                return React.cloneElement(child, {
                    enableSidebar: this.toggleVisibility
                });
            }else{
                return child;
            }
        });
        // let visibleSidebar = this.props.enableSidebar ? visible : this.props.enableSidebar


        return (
            <div>
                <Sidebar.Pushable  as={Segment}>
                    <Sidebar as={Menu} animation='uncover' width='thin' visible={sidebarVisibility} icon="labeled" vertical inverted>
                        <Link to='/profile'>
                            <Menu.Item className="sidebar__item" name='user outline'>
                                <Icon name="user outline"/>
                                Профиль
                            </Menu.Item>
                        </Link>
                        <Link to='/my-studio'>
                            <Menu.Item className="sidebar__item" name="lab">
                                <Icon name='lab'/>
                                Студия
                            </Menu.Item>
                        </Link>
                        <Link to='/exit'>
                            <Menu.Item className="sidebar__item" name='log out'>
                                <Icon name='log out'/>
                                Выйти
                            </Menu.Item>
                        </Link>
                    </Sidebar>
                    <Sidebar.Pusher>
                        {richChildren}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

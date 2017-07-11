import React, { Component } from 'react';
import { Button, Segment, Dropdown, Sidebar, Menu, Image, Icon, Header } from 'semantic-ui-react';
import Filters from '../filters';

export default class SidebarLeftUncover extends Component {

    constructor(props){
        super(props);

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    state = { visible: false }

    toggleVisibility(){
        this.setState({ visible: !this.state.visible });
    }

    render(){
        const { visible } = this.state;
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
					<Filters handleClickUser={this.toggleVisibility}/>
                    <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon="labeled" vertical inverted>
                        <Menu.Item name='home'>
                            <Icon name="home"/>
                            Home
                        </Menu.Item>
                        <Menu.Item name="gamepad">
                            <Icon name='gamepad'/>
                            Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                            <Icon name='camera'/>
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        {this.props.children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

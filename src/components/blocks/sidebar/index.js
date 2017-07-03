import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import $ from 'jquery';


export default class Sidebar extends React.Component {
    componentDidMount(){
        $('.ui.sidebar').sidebar({
            context: $('.ui.fluid.container')
        }).sidebar('attach events', '.menu .item.seach-studio')
    }

    render() {
        return (
            <div>
                <div className="ui top attached demo menu">
                    <Button className="item seach-studio">
                        <i className="sidebar icon"></i>
                        Найти студию
                    </Button>
                    <Dropdown className="item" placeholder="Выберите Страну" search selection
                        options = {[{
                            key: 'af',
                            value: 'af',
                            flag: 'af',
                            text: 'Afganistan'
                        }]}>

                    </Dropdown>
                </div>
                <div className="ui bottom attached segment pushable">
                    <div className="ui inverted labeled icon left inline vertical sidebar menu">
                        <a className="item">
                            <i className="home icon"></i>
                            Home
                        </a>
                        <a className="item">
                            <i className="block layout icon"></i>
                            Topics
                        </a>
                        <a className="item">
                            <i className="smile icon"></i>
                            Friends
                        </a>
                        <a className="item">
                            <i className="calendar icon"></i>
                            History
                        </a>
                    </div>
                    <div className="pusher" >
                        <div className="ui basic segment">
                            <h3 className="ui header">Application Content</h3>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

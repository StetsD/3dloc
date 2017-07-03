import React from 'react';
import { Button } from 'semantic-ui-react';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div className="ui top attached demo menu">
                    <Button className="item">
                        <i className="sidebar icon"></i>
                        Найти студию
                    </Button>
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

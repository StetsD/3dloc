import React from 'react';
import Filters from '../../components/blocks/filters';

export default class HomePage extends React.Component {

	constructor(props){
		super(props);

		this.toggleVisibility = this.toggleVisibility.bind(this);
	}

	toggleVisibility(){
        this.setState({ visible: !this.state.visible });
    }


	static path = '/';
	state = {visible: false}

	render(){

		return (
			<div>
				<Filters handleClickUser={this.toggleVisibility}/>
				<header>LALALALAL</header>
			</div>
		)
	}
}

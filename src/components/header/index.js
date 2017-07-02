import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

	static path = '/';

	render(){
		return (
			<nav className='navbar navbar-default'>
				HELLO MAZAFAKA!
			</nav>
		)
	}

}

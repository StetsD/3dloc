import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {connect} from 'react-redux';


class ProfilePage extends Component{
	constructor(props){
		super(props);
	}

	static path = '/profile'

	render(){
		return(
			<Container>
				HELLO MAZAFAKA!
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		profile: state.profile
	}
}

export default connect(mapStateToProps)(ProfilePage);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from 'semantic-ui-react';

class MyStudioPage extends Component {
	constructor(props){
		super(props);
	}

	static path = '/my-studio';

	render(){
		return(
			<Container>
				My Studio
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		myStudio: state.myStudio
	}
}

export default connect(mapStateToProps)(MyStudioPage);

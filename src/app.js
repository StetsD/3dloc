import React, { PropTypes } from 'react';
import { Header, Sidebar, Footer } from './components/blocks/index';
import { DevTools } from './utils/index';
import { Container } from 'semantic-ui-react';
import {connect, dispatch} from 'react-redux';
import map from './components/blocks/map';
import {toggleMenu} from './appState/action';
import {bindAll} from 'lodash';

window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.min')

location.pathname !== '/' ? map.init() : null;


class App extends React.Component {
	constructor(props){
		super(props);

		bindAll(this, ['toggleMenuHandler']);
	}

	static propTypes = {
		children: PropTypes.any.isRequired
	};
	static path = '/';

	toggleMenuHandler(){
		this.props.dispatch(toggleMenu(this.props.app.enableSidebar));
	}

	render(){

		let {enableSidebar} = this.props.app;
		return (
			<Container fluid className="prime">
				<Header />
				<Sidebar children={ this.props.children } enableSidebar={this.toggleMenuHandler} sidebarVisibility={enableSidebar}/>
				<Footer/>
				{ process.env.NODE_ENV !== 'production' ? <DevTools /> : null}
			</Container>
		)
	}
}

export default connect(state => state)(App);

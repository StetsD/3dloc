import React, { PropTypes } from 'react';
import { Header, Sidebar, Footer } from './components/blocks/index';
import { DevTools } from './utils/index';
import { Container } from 'semantic-ui-react';

window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.min')

export default class App extends React.Component {
	static propTypes = {
		children: PropTypes.any.isRequired
	};
	static path = '/';

	render(){
		return (
			<Container fluid className="prime">
				<Header />
				<Sidebar children={ this.props.children }/>
				<Footer/>
				{ process.env.NODE_ENV !== 'production' ? <DevTools /> : null}
			</Container>
		)
	}
}

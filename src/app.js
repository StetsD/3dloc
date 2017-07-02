import React, { PropTypes } from 'react';
import { Header } from './components/index';
import { DevTools } from './utils/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
	static propTypes = {
		children: PropTypes.any.isRequired
	};
	static path = '/';

	render(){
		return (
			<div>
				<Header />
				<MuiThemeProvider>
					{ this.props.children }
				</MuiThemeProvider>

				{ process.env.NODE_ENV !== 'production' ? <DevTools /> : null}
			</div>
		)
	}
}

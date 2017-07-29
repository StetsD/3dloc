import React from 'react';
import {Route} from 'react-router';
import ProfilePage from './profile';

export default (
	<Route>
		<Route path={ProfilePage.path} component={ProfilePage}/>
	</Route>
)

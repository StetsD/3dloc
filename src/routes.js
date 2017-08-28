import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import { HomePage, HomeRoutes } from './pages/home';
import { AboutRoutes } from './pages/about';
import { BlogRoutes } from './pages/blog';
import { page404Routes } from './pages/404';
import { StudioRoutes } from './pages/studio';
import { ProfileRoutes } from './pages/profile';
import { MyStudioRoutes } from './pages/my-studio';


export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={ HomePage } />
        { HomeRoutes }
		{ AboutRoutes }
		{ BlogRoutes }
		{ StudioRoutes }
        { ProfileRoutes }
        { MyStudioRoutes }

		<Route path="/login" component={HomePage}/>
		<Route path="/registration" component={HomePage}/>

        { page404Routes }

    </Route>
);

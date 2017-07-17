import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import { HomePage, HomeRoutes } from './pages/home/index';
import { AboutRoutes } from './pages/about/index';
import { BlogRoutes } from './pages/blog/index';
import { page404Routes } from './pages/404/index';
import { StudioRoutes } from './pages/studio/index';

export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={ HomePage } />
        { HomeRoutes }
		{ AboutRoutes }
		{ BlogRoutes }
		{ StudioRoutes }

        { page404Routes }

    </Route>
);

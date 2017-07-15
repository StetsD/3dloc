import React from 'react';
import BlogPage from './blog';
import { Route } from 'react-router';

export default(
    <Route>
        <Route component={BlogPage} path={BlogPage.path}/>
    </Route>

);

import React from 'react';
import { Route } from 'react-router';
import StudioPage from './studio';

export default (
    <Route>
        <Route component={StudioPage} path={StudioPage.path}/>
    </Route>
)

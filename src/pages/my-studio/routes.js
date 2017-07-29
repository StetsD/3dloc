import React from 'react';
import {Route} from 'react-router';
import MyStudioPage from './my-studio';

export default (
    <Route>
        <Route path={MyStudioPage.path} component={MyStudioPage} />
    </Route>
)

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AppReducer from './appState/reducer';
import {HomeReducer} from './pages/home/index';

export default combineReducers({
	routing: routerReducer,
	...AppReducer,
	...HomeReducer
});

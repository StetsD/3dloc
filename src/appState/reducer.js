import {LOCATION_CHANGE, INIT} from 'react-router-redux';
import {TOGGLE_MENU} from './action';

const initialState = {
	enableSidebar: false
}

let appReducer = (state = initialState, action) => {
	switch(action.type){
		case INIT:
			return {...state}
		case LOCATION_CHANGE:
			return {...state, enableSidebar: false}
		case TOGGLE_MENU:
			return {...state, enableSidebar: !action.payload}
		default:
			return {...state};
	}
}

const AppReducer = {
	app: appReducer
}

export default AppReducer;

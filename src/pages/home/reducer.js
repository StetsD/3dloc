import {GET_STUDIOS} from './actions';

const initialState = {
    isLoading: true
}

function homeReducer(state = initialState, action){
    switch(action.type){
        case GET_STUDIOS:
            return {...state, studios: action.payload};
            break;
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
}

export default HomeReducer;

import {GET_STUDIOS} from './actions';
import Studios from '../../data/studios';

const initialState = {
    isLoading: true,
    studios: Studios
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

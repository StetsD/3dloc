import Studios from '../../data/studios';

export const GET_STUDIOS = 'GET_STUDIOS';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export function getStudios(){
	return {
		type: GET_STUDIOS,
		payload: studios
	}
}

export function toggleMenu(val){
	return {
		type: TOGGLE_MENU,
		payload: val
	}
}

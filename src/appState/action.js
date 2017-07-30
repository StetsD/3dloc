export const TOGGLE_MENU = 'TOGGLE_MENU';

export function toggleMenu(val){
	return {
		type: TOGGLE_MENU,
		payload: val
	}
}

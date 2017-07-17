import studios from '../../data/studios';

export const GET_STUDIOS = 'GET_STUDIOS';

export function getStudios(){
	return {
		type: GET_STUDIOS,
		payload: studios
	}
}

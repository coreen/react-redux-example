import { GET_LYRICS } from '../constants/types'

export default function(state='', action) {
	if (action.type === GET_LYRICS) {
		return action.payload
	}
	return '';
}
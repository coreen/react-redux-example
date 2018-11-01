// can select specific attributes from the constants/types.json
// file instead of reading everything
import {
	ADD_SONG,
	GET_SONG_LIST,
	REMOVE_SONG
} from '../constants/types'

// list of songs
const initialState = [{
	title: "Never Gonna Give You Up",
	artist: "Rick Astley"
}]

// pass in default value for state if first time being called
/*
 * action = {
 *    type: <from constants/types.json>,
 *    payload: <variable from action>
 * }
 */
export default function(state=initialState, action) {
	switch(action.type) {
		case GET_SONG_LIST:
			return state
		case ADD_SONG:
			// spread operator from ES6, put everything in state into returned list
			// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
			return [
				action.payload,
				...state
			]
		case REMOVE_SONG:
			// returns new list with everything that doesn't have title as passed in song
			return state.filter(song => (song.title !== action.payload.title))
		default:
			// unknown action.type
			return state
	}
}

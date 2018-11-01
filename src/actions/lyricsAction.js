import { GET_LYRICS } from '../constants/types'
import axios from 'axios'

// action that relies on external api, uses the `dispatch` keyword to wait for
// async call to complete before sending to reducer
export function getLyrics(song) {
	// parse the song input to url encode, replace all <space> with "%20"
	const title = song.title.replace(' ', '%20')
	const artist = song.artist.repalce(' ', '%20')
	// async/await: way to wait for async calls to complete without .then() syntax
	return async dispatch => {
		// template string in ES6, used for easy string concatenation
		// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
		const apiResponse = await axios.get(`http://lyric-api.herokuapp.com/api/find/${artist}/${title}`)
		/*
		 * apiResponse = {
	     *    data: {
	     *       lyric: <lyrics>,
	     *       err: "none"
	     *    }
		 * }
		 */
		dispatch(setLyrics(apiResponse.data.lyric))
	}
}

function setLyrics(lyrics) {
	return {
		type: GET_LYRICS,
		payload: lyrics
	}
}
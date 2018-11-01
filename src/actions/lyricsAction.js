import { GET_LYRICS } from '../constants/types'
import axios from 'axios'

// action that relies on external api, uses the `dispatch` keyword to wait for
// async call to complete before sending to reducer
export function getLyrics(song) {
	// parse the song input to url encode, replace all <space> with "%20"
	// Resource: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
	// const title = song.title.split(' ').join('%20')
	// const artist = song.artist.split(' ').join('%20')
	// async/await: way to wait for async calls to complete without .then() syntax
	return async (dispatch) => {
		// template string in ES6, used for easy string concatenation
		// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
		const url = encodeURI(`http://lyric-api.herokuapp.com/api/find/${song.artist}/${song.title}`)
		const apiResponse = await axios.get(url)
		/*
		 * apiResponse = {
	     *    data: {
	     *       lyric: <lyrics>,
	     *       err: "none"
	     *    }
		 * }
		 */
	console.log(apiResponse.data.lyric)
		return dispatch(setLyrics(apiResponse.data.lyric))
	}
}

function setLyrics(lyrics) {
	return {
		type: GET_LYRICS,
		payload: lyrics
	}
}
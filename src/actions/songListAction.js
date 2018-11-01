// actions that components can do, passed to the reducer to update the store
// all calls here are synchronous
import {
	ADD_SONG,
	GET_SONG_LIST,
	REMOVE_SONG
} from '../constants/types'

export function getSongList() {
	return {
		type: GET_SONG_LIST
	}
}

export function addSong(title, artist) {
	console.log('songListAction addSong', title, artist)
	// ES6 will automatically map name to itself unless otherwise specified
	return {
		type: ADD_SONG,
		payload: {
			title: title,
			artist
		}
	}
}

export function removeSong(song) {
	return {
		type: REMOVE_SONG,
		payload: song
	}
}

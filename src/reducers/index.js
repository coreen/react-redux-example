import { combineReducers } from 'redux'
import lyricsReducer from './lyricsReducer'
import songListReducer from './songListReducer'

// combines all reducers into a single one for the `store` to use in src/index.js
// maps to new naming for reference outside of store
export default combineReducers({
	lyrics: lyricsReducer,
	songList: songListReducer
})
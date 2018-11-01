import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	removeSong,
	getLyrics
} from '../actions'

class SongList extends Component {
	render() {
		const {
			songList,
			removeSong,
			lyrics,
			getLyrics
		} = this.props

		const songs = songList.map((song, i) => {
			console.log('song',song,'index',i)
			return (
			<li className="song" key={ i }>
				{ `${song.title}, by ${song.artist}` }
				&nbsp;
				&nbsp;
				&nbsp;
				<i onClick={ () => getLyrics(song) }>
					Click for lyrics
				</i>
			</li>
		)})

		return (
			<div>
				<h3>Song List</h3>
				<ol>{ songs }</ol>
				<i
					className='remove-btn'
					onClick={() => removeSong(songList[0])}
				>
					Click text to remove first song from list
				</i>
				<h3>Lyrics</h3>
				{ lyrics }
			</div>
		)
	}
}

// maps this.props.songList to this.state
function mapStateToProps(state) {
	return {
		songList: state.songList,
		lyrics: state.lyrics
	}
}

// AKA bindAction
// Resource: https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops
function mapDispatchToProps(dispatch) {
	// binds all dispatch operations to a single location instead of inline within component
	return {
		removeSong: (song) => dispatch(removeSong(song)),
		getLyrics: (song) => dispatch(getLyrics(song))
	}
}

// connects the component to the data store
export default connect(mapStateToProps, mapDispatchToProps)(SongList)
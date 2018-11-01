import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeSong } from '../actions'

class SongList extends Component {
	render() {
		const { songList, removeSong } = this.props

		const songs = songList.map((song, i) => {
			console.log('song',song,'index',i)
			return (
			<li className="song" key={ i }>
				{ `${song.title}, by ${song.artist}` }
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
			</div>
		)
	}
}

// maps this.props.songList to this.state
function mapStateToProps(state) {
	return {
		songList: state.songList
	}
}

// AKA bindAction
// Resource: https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops
function mapDispatchToProps(dispatch) {
	// binds all dispatch operations to a single location instead of inline within component
	return {
		removeSong: (song) => dispatch(removeSong(song))
	}
}

// connects the component to the data store
export default connect(mapStateToProps, mapDispatchToProps)(SongList)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSong } from '../../actions'
// 2 ways of having components imported, depending on how exported (see files for reasoning)
import { TextButton } from './TextButton'

export class SongForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			artist: ''
		}
		// 2 ways to bind functions, either explicitly in constructor
		// or as an anonymous lambda function
		this.updateArtist = this.updateArtist.bind(this)
	}

	updateTitle = (event) => this.setState({ title: event.target.value })

	updateArtist(event) {
		this.setState({ artist: event.target.value })
	}

	render() {
		return (
			<div className='form'>
				<div className='field'>
					Song Title?
					<input
						type='text'
						placeholder='Enter title here'
						value={this.state.title}
						onChange={this.updateTitle}
					/>
				</div>
				<br />
				<div className='field'>
					Artist?
					<input
						type='text'
						placeholder='Enter artist here'
						value={this.state.artist}
						onChange={this.updateArtist}
					/>
				</div>
				<br />

				<TextButton
					text='Submit'
					onClick={() => this.props.dispatch(addSong(this.state.title, this.state.artist))}
				/>
			</div>
		)
	}
}

// needed to have access to dispatch actions
export default connect()(SongForm)
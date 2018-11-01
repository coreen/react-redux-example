import React, { Component } from 'react'
import SongList from './SongList'
import SongForm from './SongForm'

class App extends Component {
	render() {
		// the JSX here must be within a single tag
		return (
			<div>
				<SongList />
				<br />
				<SongForm />
			</div>
		)
	}
}

export default App
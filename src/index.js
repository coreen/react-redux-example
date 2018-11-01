import React from 'react'
import { createStore } from 'redux'
// by default if don't specify a file will look for index.js to import
import reducers from './reducers'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

// single source of data initialization
const store = createStore(reducers)

// tells React where to bootstrap the app within index.html
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
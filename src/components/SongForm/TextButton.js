import React, { Component } from 'react'

/*
 * this.props = {
 *    text: <string>,
 *    onClick: <function>
 * }
 */
export class TextButton extends Component {
	render() {
		// since variables not extracted from props up front need to specify entire path
		return <button onClick={this.props.onClick}>{ this.props.text }</button>
	}
}
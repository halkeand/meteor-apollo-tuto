import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const createResolutionQuery = gql`
	mutation createResolution($name: String!) {
		createResolution(name: $name) {
			_id
		}
	}
`

class ResolutionForm extends Component {
	submitForm = () => {
		this.props
			.createResolution({
				variables: {
					name: this.name.value
				}
			})
			.then(d => console.log('data received'))
			.catch(e => console.log(e))
	}
	render() {
		return (
			<div>
				<input type="text" ref={input => (this.name = input)} />
				<button onClick={this.submitForm}>Submit</button>
			</div>
		)
	}
}

export default graphql(createResolutionQuery, {
	name: 'createResolution'
})(ResolutionForm)

import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ResolutionForm from './ResolutionForm'

const App = ({ data }) =>
	data.loading ? null : (
		<div>
			<h1>{data.hi}</h1>
			<ResolutionForm />
			<ul>{data.resolutions.map(r => <li key={r._id}>{r.name}</li>)}</ul>
		</div>
	)

export default graphql(gql`
	{
		hi
		resolutions {
			_id
			name
		}
	}
`)(App)

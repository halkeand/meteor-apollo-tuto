import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from '../../ui/App'

const link = new HttpLink({
	uri: Meteor.absoluteUrl('graphql')
})
const cache = new InMemoryCache()
const client = new ApolloClient({ link, cache })

Meteor.startup(() => {
	render(
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>,
		document.querySelector('#app')
	)
})

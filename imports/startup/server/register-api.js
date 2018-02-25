import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
import ResolutionsResolver from '../../api/resolutions/resolvers'
import merge from 'lodash/merge'

//h
const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`

const resolverTest = {
	Query: {
		hi() {
			return 'Hello boyyy'
		}
	}
}

const typeDefs = [testSchema, ResolutionsSchema]
const resolvers = merge(resolverTest, ResolutionsResolver)

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})

createApolloServer({ schema })

import Resolutions from './resolutions'

export default {
	Query: {
		resolutions() {
			return Resolutions.find({}).fetch()
		}
	},
	Mutation: {
		createResolution(obj, args, context) {
			console.log('hey i get here')
			// const id = Resolutions.insert({
			// 	name: 'Test Res 2'
			// })
		}
	}
}

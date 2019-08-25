const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');


module.exports = new GraphQLObjectType({
	name: 'query',
	fields: {
		test: {
			type: GraphQLString,
			args: {},
			resolve: () => {
				return 'Hello World';
			}
		},
	},
});
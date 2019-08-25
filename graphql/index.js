const { GraphQLSchema } = require('graphql');
const RootQueryType = require('./RootQueryType');
const RootSubscriptionType = require('./RootSubscriptionType');

module.exports = new GraphQLSchema({
	query: RootQueryType,
	subscription: RootSubscriptionType,
});
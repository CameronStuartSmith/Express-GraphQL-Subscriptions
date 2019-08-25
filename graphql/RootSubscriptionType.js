const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

module.exports = new GraphQLObjectType({
	name: "RootSubscription",
  description: "Root Subscription",
	fields: () => ({
		commentAdded: {
			type: GraphQLString,
			subscribe: () => pubsub.asyncIterator('commentAdded'),
			resolve: payload => {
				return `Comment #${payload}`;
			},
		},
	}),
});

let count = 0;

setInterval(() => {
	count++;
	console.log('Publishing Comment', count);
	pubsub.publish('commentAdded', count);
}, 2000);

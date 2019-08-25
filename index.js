const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./graphql');

const app = express();
const PORT = 5000;

app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true,
	subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
}));

app.get('/', (req, res) => {
	res.send('Hello World');
});

// Setup the subscription stuff
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { createServer } = require('http');

const server = createServer(app);

server.listen(PORT, () => {
    new SubscriptionServer({
      execute,
      subscribe,
      schema,
    }, {
      server: server,
      path: '/subscriptions',
    });
});
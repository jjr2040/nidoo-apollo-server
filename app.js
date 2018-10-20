const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloEngine } = require('apollo-engine');
const { typeDefs, resolvers } = require('./schema');

const PORT = process.env.PORT || 3000;

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
    cacheControl: true,
    engine: false,
    introspection: true
});

server.applyMiddleware({ app });

// const engine = new ApolloEngine({
//     apiKey: ''
// });

// engine.listen({
//     port: PORT,
//     expressApp: app
// }, () => {
//     console.log(`Server running on port ${PORT}!`);
// });

app.listen({ port: PORT }, () => {
    console.log(`Running at http://localhost:${PORT}${server.graphqlPath}`)
});

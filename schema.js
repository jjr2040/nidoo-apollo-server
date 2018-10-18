const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Booking {
        "A simple query for getting started"
        hello: String
    }
`;

const resolvers = {
    Booking: {
        hello: () => 'world'
    }
};

module.exports = { typeDefs, resolvers };


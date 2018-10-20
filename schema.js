const { gql } = require('apollo-server-express');
const { find, filter } = require('lodash');

const typeDefs = gql`
    type Location {
        type: String
        coordinates: [Float]
    }

    type ParkingLot {
        location: Location
        address: String
        zone: String
        state: Int
        vehicleType: String
        isAvailable: Boolean
        owner: String
    }

    type Booking {
        createdAt: String
        updateAt: String
        carPlate: String
        state: Int
        booker: String
        parkingLot: String
    }

    type Query {
        parkinglots: [ParkingLot]
    }
`;

const resolvers = {
    Query: {
        parkinglots: () => ['hello']
    },

    ParkingLot: {
        location: () => {
            return { type: 'Point', coordinates: [1,2] }
        },
        address: () => 'Crr 53 n 104 b 22',
        zone: () => 'Suba',
        state: () => 1,
        vehicleType: () => 'carro',
        isAvailable: () => true,
        owner: () => 'asdada'
    }
};

module.exports = { typeDefs, resolvers };


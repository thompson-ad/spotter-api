const cors = require('micro-cors')();
const { ApolloServer, gql } = require('apollo-server-micro');
const { send } = require('micro');
const { movementHistory } = require('./fixtures');

const wait = numMs => new Promise(res => setTimeout(() => res(), numMs));

const typeDefs = gql`
  enum WeightUnit {
    KG
    LB
  }

  type Progression {
    date: String!
    weight: String!
    weightUnit: WeightUnit!
    reps: Int!
    sets: Int!
  }

  type MovementHistory {
    id: ID!
    movementName: String!
    progressions: [Progression!]!
  }

  type Query {
    movementHistory: [MovementHistory!]!
  }
`;

const resolvers = {
  Query: {
    async movementHistory() {
      await wait(1000);
      return movementHistory;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

module.exports = apolloServer.start().then(() => {
  const handler = apolloServer.createHandler();
  return cors((req, res) =>
    req.method === 'OPTIONS' ? send(res, 200, 'ok') : handler(req, res),
  );
});

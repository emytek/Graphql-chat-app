// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
// import express from 'express';
// import http from 'http';
// import cors from 'cors';
// import bodyParser from 'body-parser';

const { ApolloServer } = require('apollo-server')

const { sequelize } = require('./models')

// A map of functions which return data for the schema.
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);

    sequelize
    .authenticate()
    .then(() => console.log('Database connected!!'))
    .catch((err) => console.log(err))
});


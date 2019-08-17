// @flow

import 'dotenv/config'

import { ApolloServer, gql } from 'apollo-server-lambda'
import Knex from 'knex'

const { DB_URL } = process.env

const knex = Knex({
  client: 'pg',
  connection: DB_URL,
  searchPath: ['knex', 'public'],
})

const typeDefs = gql`
  type Note {
    id: String!
    userId: String!
    createdAt: String!
    updatedAt: String!
    title: String!
    description: String
  }

  type Query {
    getNote(id: String!, userId: String!): Note
    getNotes(userId: String!): [Note]
    # createNote(): Boolean
    # updateNote(): Note
    # deleteNote(): Boolean
  }
`
const resolvers = {
  Query: {
    getNote: (_, { id, userId }) =>
      knex('Note')
        .where({ id, userId })
        .first(),
    getNotes: (_, { userId }) => knex('Note').where({ userId }),
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export const main = server.createHandler()

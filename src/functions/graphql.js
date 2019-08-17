// @flow

import 'dotenv/config'

import { ApolloServer } from 'apollo-server-lambda'
import merge from 'lodash/merge'
import { noteTypeDefs, noteResolvers } from 'note/note-graphql'

const server = new ApolloServer({ typeDefs: [noteTypeDefs], resolvers: merge(noteResolvers) })

export const main = server.createHandler()

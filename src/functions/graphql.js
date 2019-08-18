// @flow

import 'dotenv/config'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// flow-disable-next-line
import { setGlobal } from '@sharyn/util/global'
import { ApolloServer } from 'apollo-server-lambda'
import Knex from 'knex'
import merge from 'lodash/merge'
import { noteTypeDefs, noteResolvers } from 'note/note-graphql'

const { DB_URL } = process.env

const server = new ApolloServer({ typeDefs: [noteTypeDefs], resolvers: merge(noteResolvers) })

// https://github.com/apollographql/apollo-server/issues/2179
const runHandler = (event, context, handler) =>
  new Promise((resolve, reject) => {
    const callback = (error, body) => (error ? reject(error) : resolve(body))
    handler(event, context, callback)
  })

export const main = async (event: Object, context: Object) => {
  const knex = Knex({ client: 'pg', connection: DB_URL, searchPath: ['knex', 'public'] })
  setGlobal('knex', knex)
  const handler = server.createHandler({ cors: { credentials: true, origin: '*' } })
  const response = await runHandler(event, context, handler)
  knex.destroy()
  return response
}

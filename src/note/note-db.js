// @flow

import Knex from 'knex'
import uuid from 'uuid/v4'

const { DB_URL } = process.env

const knex = Knex({
  client: 'pg',
  connection: DB_URL,
  searchPath: ['knex', 'public'],
})

const NOTE_TABLE = 'Note'

export const getNote = ({ userId, id }: { userId: string, id: string }) =>
  knex(NOTE_TABLE)
    .where({ userId, id })
    .first()

export const getNotes = ({ userId }: { userId: string }) => knex(NOTE_TABLE).where({ userId })

export const createNote = async ({ userId, input }: { userId: string, input: Object }) => {
  const queryResult = await knex(NOTE_TABLE).insert({
    userId,
    id: uuid(),
    ...input,
  })
  return queryResult?.rowCount === 1
}

export const updateNote = async ({
  userId,
  id,
  input,
}: {
  userId: string,
  id: string,
  input: Object,
}) => {
  const queryResult = await knex(NOTE_TABLE)
    .where({ userId, id })
    .update({ ...input, updatedAt: knex.fn.now() })
  return queryResult === 1
}

export const deleteNote = async ({ userId, id }: { userId: string, id: string }) => {
  const queryResult = await knex(NOTE_TABLE)
    .where({ userId, id })
    .del()
  return queryResult === 1
}

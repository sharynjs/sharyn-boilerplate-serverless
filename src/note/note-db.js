// @flow

// flow-disable-next-line
import { getGlobal } from '@sharyn/util/global'
import uuid from 'uuid/v4'

const NOTE_TABLE = 'Note'

export const getNote = ({ userId, id }: { userId: string, id: string }) =>
  getGlobal('knex')(NOTE_TABLE)
    .where({ userId, id })
    .first()

export const getNotes = ({ userId }: { userId: string }) =>
  getGlobal('knex')(NOTE_TABLE).where({ userId })

export const createNote = async ({ userId, input }: { userId: string, input: Object }) => {
  const queryResult = await getGlobal('knex')(NOTE_TABLE).insert({
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
  const queryResult = await getGlobal('knex')(NOTE_TABLE)
    .where({ userId, id })
    .update({ ...input, updatedAt: getGlobal('knex').fn.now() })
  return queryResult === 1
}

export const deleteNote = async ({ userId, id }: { userId: string, id: string }) => {
  const queryResult = await getGlobal('knex')(NOTE_TABLE)
    .where({ userId, id })
    .del()
  return queryResult === 1
}

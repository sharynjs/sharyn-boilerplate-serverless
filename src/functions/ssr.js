// @flow

import middy from 'middy'
import { cors } from 'middy/middlewares'
import { getNotesCall, getNoteCall } from 'note/note-calls'

export const getNote = middy(async () => {
  const resp = await getNoteCall()
  return { statusCode: 200, body: JSON.stringify(resp.data.data) }
}).use(cors())

export const getNotes = middy(async () => {
  const resp = await getNotesCall()
  return { statusCode: 200, body: JSON.stringify(resp.data.data) }
}).use(cors())

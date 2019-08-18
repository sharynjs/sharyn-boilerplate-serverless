// @flow

import 'dotenv/config'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import middy from 'middy'
import { cors } from 'middy/middlewares'

import { getNotesCall, getNoteCall } from 'note/note-calls'
import NotesPage from 'note/cmp-page/NotesPage'
import NotePage from 'note/cmp-page/NotePage'

const createHtml = (body: string) => `<!doctype html>
<html>
  <head></head>
  <body>${body}</body>
</html>
`

export const getNote = middy(async event => ({
  statusCode: 200,
  headers: { 'content-type': 'text/html' },
  body: createHtml(NotePage(await getNoteCall(event))),
})).use(cors())

export const getNotes = middy(async event => ({
  statusCode: 200,
  headers: { 'content-type': 'text/html' },
  body: createHtml(NotesPage(await getNotesCall(event))),
})).use(cors())

// @flow

import { createHtml } from '_shared/util'
import { getNotesCall, getNoteCall } from 'note/note-calls'
import NotesPage from 'note/cmp-page/NotesPage'
import NotePage from 'note/cmp-page/NotePage'

const routes = [
  {
    path: '/',
    handler: async (req: Object, res: Object) =>
      res.send(createHtml(NotesPage(await getNotesCall()))),
  },
  {
    path: '/note/:id',
    handler: async (req: Object, res: Object) =>
      res.send(createHtml(NotePage(await getNoteCall(req.params.id)))),
  },
]

export default routes

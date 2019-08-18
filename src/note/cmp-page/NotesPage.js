// @flow

// flow-disable-next-line
import { getGlobal } from '@sharyn/util/global'

// TODO: When converted to React, use https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string

const NotesPage = (notes: Object[]) => `
  ${notes
    .map(
      n =>
        `<h2><a href="${getGlobal('baseURL')}/note/${n.id}">${n.title}</a></h2><p>${
          n.description
        }</p>`,
    )
    .join('')}
`

export default NotesPage

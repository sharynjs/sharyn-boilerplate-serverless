// @flow

const NotesPage = (notes: Object[]) => `
  ${notes
    .map(n => `<h2><a href="/note/${n.id}">${n.title}</a></h2><p>${n.description}</p>`)
    .join('')}
`

export default NotesPage

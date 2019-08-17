// @flow

const NotePage = ({ title, description }: { title: string, description?: string }) => `
  <h1>${title}</h1><p>${description ?? ''}</p>
`

export default NotePage

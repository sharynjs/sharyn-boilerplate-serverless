// @flow

import { graphqlCall } from '_shared/util'
import { getNotesQuery, getNoteQuery } from 'note/note-queries'

export const getNotesCall = async () => {
  const { data } = await graphqlCall({
    params: {
      query: getNotesQuery,
      variables: { userId: 'auth0|5d57c4d1970c780e706b54d3' },
    },
  })
  return data.data.getNotes
}

export const getNoteCall = async (id: string) => {
  const { data } = await graphqlCall({
    params: {
      query: getNoteQuery,
      variables: { userId: 'auth0|5d57c4d1970c780e706b54d3', id },
    },
  })
  return data.data.getNote
}

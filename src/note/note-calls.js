// @flow

import axios from 'axios'

import { getNotesQuery, getNoteQuery } from 'note/note-queries'

const graphqlCall = ({ params, data, ...rest }: { params?: Object, data?: Object }) =>
  axios({
    method: data ? 'post' : 'get',
    baseURL: 'http://localhost:3000',
    url: '/graphql',
    params,
    data,
    ...rest,
  })

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

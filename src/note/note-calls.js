// @flow

import axios from 'axios'

import { getNotesQuery, getNoteQuery } from 'note/note-queries'

const graphqlCall = (
  { isOffline, requestContext }: { isOffline: boolean, requestContext: Object },
  { params, data, ...rest }: { params?: Object, data?: Object },
) =>
  axios({
    method: data ? 'post' : 'get',
    baseURL: isOffline
      ? 'http://localhost:3000'
      : `https://${requestContext.domainName}/${requestContext.stage}`,
    url: '/graphql',
    params,
    data,
    ...rest,
  })

export const getNotesCall = async (event: Object) => {
  const { data } = await graphqlCall(event, {
    params: {
      query: getNotesQuery,
      variables: { userId: 'auth0|5d57c4d1970c780e706b54d3' },
    },
  })
  return data.data.getNotes
}

export const getNoteCall = async (event: Object) => {
  const { data } = await graphqlCall(event, {
    params: {
      query: getNoteQuery,
      variables: { userId: 'auth0|5d57c4d1970c780e706b54d3', id: event.pathParameters.id },
    },
  })
  return data.data.getNote
}

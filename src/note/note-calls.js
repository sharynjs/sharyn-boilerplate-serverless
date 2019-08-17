// @flow

import axios from 'axios'

import { getNotesQuery, getNoteQuery } from 'note/note-graphql'

const call = (params: Object) => axios.get('http://localhost:3000/graphql', { params })

export const getNotesCall = () =>
  call({
    query: getNotesQuery,
    variables: { userId: 'auth0|5d57c4d1970c780e706b54d3' },
  })

export const getNoteCall = () =>
  call({
    query: getNoteQuery,
    variables: {
      userId: 'auth0|5d57c4d1970c780e706b54d3',
      id: '1deb0c21-1e0d-4923-935d-7a65b24c9b84',
    },
  })

// @flow

export const getNotesQuery =
  'query ($userId: ID!) { getNotes(userId: $userId) { id title description } }'

export const getNoteQuery =
  'query ($userId: ID!, $id: ID!) { getNote(userId: $userId, id: $id) { id title description } }'

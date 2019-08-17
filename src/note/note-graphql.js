// @flow

import { gql } from 'apollo-server-lambda'

import { getNote, getNotes, createNote, updateNote, deleteNote } from 'note/note-db'

export const noteTypeDefs = gql`
  type Note {
    id: ID!
    userId: ID!
    createdAt: String!
    updatedAt: String!
    title: String!
    description: String
  }

  input NoteInput {
    title: String!
    description: String
  }

  type Query {
    getNotes(userId: ID!): [Note]
    getNote(userId: ID!, id: ID!): Note
  }

  type Mutation {
    createNote(userId: ID!, input: NoteInput!): Boolean
    updateNote(userId: ID!, id: ID!, input: NoteInput!): Boolean
    deleteNote(userId: ID!, id: ID!): Boolean
  }
`

export const noteResolvers = {
  Query: {
    getNotes: (_: Object, args: Object) => getNotes(args),
    getNote: (_: Object, args: Object) => getNote(args),
  },
  Mutation: {
    createNote: (_: Object, args: Object) => createNote(args),
    updateNote: (_: Object, args: Object) => updateNote(args),
    deleteNote: (_: Object, args: Object) => deleteNote(args),
  },
}

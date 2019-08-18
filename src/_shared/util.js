// @flow

// flow-disable-next-line
import { getGlobal } from '@sharyn/util/global'
import axios from 'axios'

export const graphqlCall = ({ params, data, ...rest }: { params?: Object, data?: Object }) =>
  axios({
    method: data ? 'post' : 'get',
    baseURL: getGlobal('baseURL'),
    url: '/graphql',
    params,
    data,
    ...rest,
  })

export const createHtml = (body: string) => `<!doctype html>
  <html>
    <head></head>
    <body>${body}</body>
  </html>
  `

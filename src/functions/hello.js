// @flow

import middy from 'middy'
import { cors } from 'middy/middlewares'

export const main = middy(async () => {
  return { statusCode: 200, body: 'ok' }
}).use(cors())

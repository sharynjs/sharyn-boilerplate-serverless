// @flow

import 'dotenv/config'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// flow-disable-next-line
import { setGlobal } from '@sharyn/util/global'
import awsServerlessExpress from 'aws-serverless-express'
import express from 'express'
import asyncHandler from 'express-async-handler'

import noteRoutes from 'note/note-routes'

const app = express()
const routes = [...noteRoutes]
routes.forEach(({ path, handler }) => app.get(path, asyncHandler(handler)))

const server = awsServerlessExpress.createServer(app)

export const main = (event: Object, context: Object) => {
  const baseURL = process.env.IS_OFFLINE
    ? 'http://localhost:3000'
    : `https://${event.requestContext.domainName}/${event.requestContext.stage}`
  setGlobal('event', event)
  setGlobal('context', context)
  setGlobal('baseURL', baseURL)
  awsServerlessExpress.proxy(server, event, context)
}

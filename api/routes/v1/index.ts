import { OpenAPIHono } from '@hono/zod-openapi'
import { userRouter } from './user.routes.js'

export const v1Router = new OpenAPIHono()

v1Router.route('/users', userRouter)

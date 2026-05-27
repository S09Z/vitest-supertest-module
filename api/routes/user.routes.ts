import { OpenAPIHono, createRoute } from '@hono/zod-openapi'
import {
  deleteUserHandler,
  getUserByIdHandler,
  getUsersHandler,
  registerUserHandler,
} from '../modules/user/user.handler.js'
import { defaultHook } from '../lib/defaultHook.js'
import {
  ErrorSchema,
  IdParamSchema,
  RegisterBodySchema,
  UserListSchema,
  UserResponseSchema,
} from '../modules/user/user.schema.js'

export const userRouter = new OpenAPIHono({ defaultHook })

export const registerUserRoute = createRoute({
  method: 'post',
  path: '/register',
  tags: ['Users'],
  request: {
    body: { content: { 'application/json': { schema: RegisterBodySchema } }, required: true },
  },
  responses: {
    201: { content: { 'application/json': { schema: UserResponseSchema } }, description: 'User created' },
    400: { content: { 'application/json': { schema: ErrorSchema } }, description: 'Validation error' },
    409: { content: { 'application/json': { schema: ErrorSchema } }, description: 'Email already registered' },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Users'],
  responses: {
    200: { content: { 'application/json': { schema: UserListSchema } }, description: 'List of users' },
  },
})

export const getUserByIdRoute = createRoute({
  method: 'get',
  path: '/{id}',
  tags: ['Users'],
  request: { params: IdParamSchema },
  responses: {
    200: { content: { 'application/json': { schema: UserResponseSchema } }, description: 'User found' },
    404: { content: { 'application/json': { schema: ErrorSchema } }, description: 'User not found' },
  },
})

export const deleteUserRoute = createRoute({
  method: 'delete',
  path: '/{id}',
  tags: ['Users'],
  request: { params: IdParamSchema },
  responses: {
    204: { description: 'User deleted' },
    404: { content: { 'application/json': { schema: ErrorSchema } }, description: 'User not found' },
  },
})

userRouter.openapi(registerUserRoute, registerUserHandler)
userRouter.openapi(getUsersRoute, getUsersHandler)
userRouter.openapi(getUserByIdRoute, getUserByIdHandler)
userRouter.openapi(deleteUserRoute, deleteUserHandler)

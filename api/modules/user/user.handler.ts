import type { RouteHandler } from '@hono/zod-openapi'
import { HTTPException } from 'hono/http-exception'
import {
  deleteUserById,
  findUserById,
  listUsers,
  registerUser,
} from './user.controller.js'
import type {
  deleteUserRoute,
  getUserByIdRoute,
  getUsersRoute,
  registerUserRoute,
} from './user.routes.js'

export const registerUserHandler: RouteHandler<typeof registerUserRoute> = async (c) => {
  const { email, password } = c.req.valid('json')
  try {
    const user = await registerUser(email, password)
    return c.json(user, 201)
  } catch (err: any) {
    if (err.code === 11000)
      throw new HTTPException(409, { message: 'email already registered' })
    throw new HTTPException(500, { message: 'Failed to register user' })
  }
}

export const getUsersHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  try {
    const users = await listUsers()
    return c.json(users)
  } catch {
    throw new HTTPException(500, { message: 'Failed to fetch users' })
  }
}

export const getUserByIdHandler: RouteHandler<typeof getUserByIdRoute> = async (c) => {
  const { id } = c.req.valid('param')
  try {
    const user = await findUserById(id)
    if (!user) throw new HTTPException(404, { message: 'user not found' })
    return c.json(user, 200)
  } catch (err) {
    if (err instanceof HTTPException) throw err
    throw new HTTPException(500, { message: 'Failed to fetch user' })
  }
}

export const deleteUserHandler: RouteHandler<typeof deleteUserRoute> = async (c) => {
  const { id } = c.req.valid('param')
  try {
    const deleted = await deleteUserById(id)
    if (!deleted) throw new HTTPException(404, { message: 'user not found' })
    return c.body(null, 204)
  } catch (err) {
    if (err instanceof HTTPException) throw err
    throw new HTTPException(500, { message: 'Failed to delete user' })
  }
}

import { z } from '@hono/zod-openapi'

export const RegisterBodySchema = z
  .object({
    email: z.string().email().openapi({ example: 'alice@example.com' }),
    password: z.string().min(6).openapi({ example: 'secret123' }),
  })
  .openapi('RegisterBody')

export const UserResponseSchema = z
  .object({
    id: z.string().openapi({ example: '60d21b4667d0d8992e610c85' }),
    email: z.string().email().openapi({ example: 'alice@example.com' }),
  })
  .openapi('UserResponse')

export const UserListSchema = z.array(UserResponseSchema).openapi('UserList')

export const ErrorSchema = z
  .object({
    message: z.string().openapi({ example: 'user not found' }),
  })
  .openapi('Error')

export const IdParamSchema = z
  .object({
    id: z
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, 'must be a valid MongoDB ObjectId')
      .openapi({ example: '60d21b4667d0d8992e610c85' }),
  })
  .openapi('IdParam')

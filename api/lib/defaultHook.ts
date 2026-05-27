import type { Hook } from '@hono/zod-openapi'
import type { ZodError } from 'zod'
import { getStatusText } from '../constants/httpStatus.js'

export const defaultHook: Hook<any, any, any, any> = (result, c) => {
  if (!result.success) {
    const issue = (result.error as ZodError).issues[0]
    const field = issue?.path.join('.') ?? 'input'
    return c.json(
      { msg: `${field}: ${issue?.message ?? 'Invalid'}`, code: 400, status: getStatusText(400) },
      400,
    )
  }
}

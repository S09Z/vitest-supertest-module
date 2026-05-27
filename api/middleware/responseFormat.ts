import type { MiddlewareHandler } from 'hono'
import { getStatusText } from '../constants/httpStatus.js'

export const responseFormat: MiddlewareHandler = async (c, next) => {
  await next()

  const { status } = c.res
  if (status === 204) return

  const ct = c.res.headers.get('content-type') ?? ''
  if (!ct.includes('application/json')) return

  const body = await c.res.clone().json()

  // defaultHook already returns the final shape — don't double-wrap
  if (typeof body?.code === 'number' && 'msg' in body && 'status' in body) return

  c.res = Response.json(
    { msg: body, code: status, status: getStatusText(status) },
    { status },
  )
}

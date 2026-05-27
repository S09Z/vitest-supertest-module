import { swaggerUI } from '@hono/swagger-ui'
import { OpenAPIHono } from '@hono/zod-openapi'
import { HTTPException } from 'hono/http-exception'
import { getStatusText } from './constants/httpStatus.js'
import { defaultHook } from './lib/defaultHook.js'
import { responseFormat } from './middleware/responseFormat.js'
import { userRouter } from './routes/user.routes.js'

export function configureApp() {
  const app = new OpenAPIHono({ defaultHook })

  app.use('*', responseFormat)
  app.route('/api/users', userRouter)

  app.doc('/doc', {
    openapi: '3.0.0',
    info: { title: 'User API', version: '1.0.0' },
  })

  app.get('/ui', swaggerUI({ url: '/doc' }))

  app.onError((err, c) => {
    const code = err instanceof HTTPException ? err.status : 500
    const msg = err instanceof HTTPException ? err.message : 'Internal server error'
    return c.json({ msg, code, status: getStatusText(code) }, code)
  })

  return app
}

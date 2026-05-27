import { swaggerUI } from '@hono/swagger-ui'
import { trpcServer } from '@hono/trpc-server'
import { OpenAPIHono } from '@hono/zod-openapi'
import { HTTPException } from 'hono/http-exception'
import { getStatusText } from './constants/httpStatus.js'
import { defaultHook } from './lib/defaultHook.js'
import { responseFormat } from './middleware/responseFormat.js'
import { appRouter } from './routes/trpc.js'
import { v1Router } from './routes/v1/index.js'

export function configureApp() {
  const app = new OpenAPIHono({ defaultHook })

  app.use('*', responseFormat)
  app.use('/trpc/*', trpcServer({ router: appRouter }))
  app.route('/api/v1', v1Router)

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

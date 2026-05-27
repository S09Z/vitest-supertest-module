import { router } from '../lib/trpc.js'
import { userTrpcRouter } from '../modules/user/user.trpc.js'

export const appRouter = router({
  user: userTrpcRouter,
})

export type AppRouter = typeof appRouter

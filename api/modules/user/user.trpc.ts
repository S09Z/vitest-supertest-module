import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { publicProcedure, router } from '../../lib/trpc.js'
import { deleteUserById, findUserById, listUsers, registerUser } from './user.controller.js'

const mongoId = z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId')

export const userTrpcRouter = router({
  register: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(8) }))
    .mutation(async ({ input }) => {
      try {
        return await registerUser(input.email, input.password)
      } catch (err: any) {
        if (err.code === 11000) throw new TRPCError({ code: 'CONFLICT', message: 'email already registered' })
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to register user' })
      }
    }),

  list: publicProcedure.query(async () => {
    try {
      return await listUsers()
    } catch {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch users' })
    }
  }),

  getById: publicProcedure
    .input(z.object({ id: mongoId }))
    .query(async ({ input }) => {
      try {
        const user = await findUserById(input.id)
        if (!user) throw new TRPCError({ code: 'NOT_FOUND', message: 'user not found' })
        return user
      } catch (err) {
        if (err instanceof TRPCError) throw err
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch user' })
      }
    }),

  delete: publicProcedure
    .input(z.object({ id: mongoId }))
    .mutation(async ({ input }) => {
      try {
        const deleted = await deleteUserById(input.id)
        if (!deleted) throw new TRPCError({ code: 'NOT_FOUND', message: 'user not found' })
        return { success: true }
      } catch (err) {
        if (err instanceof TRPCError) throw err
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete user' })
      }
    }),
})

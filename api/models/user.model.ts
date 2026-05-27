import { Schema, model } from 'mongoose'
import type { UserType } from '../types/userTypes.js'

const userSchema = new Schema<UserType>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

export const User = model<UserType>('User', userSchema)

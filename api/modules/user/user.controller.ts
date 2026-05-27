import bcrypt from 'bcryptjs'
import { User } from './user.model.js'

export type UserDto = { id: string; email: string }

export async function registerUser(email: string, password: string): Promise<UserDto> {
  const hashed = await bcrypt.hash(password, 10)
  const user = await User.create({ email, password: hashed })
  return { id: String(user._id), email: user.email }
}

export async function listUsers(): Promise<UserDto[]> {
  const users = await User.find({}, { password: 0 })
  return users.map((u) => ({ id: String(u._id), email: u.email }))
}

export async function findUserById(id: string): Promise<UserDto | null> {
  const user = await User.findById(id, { password: 0 })
  if (!user) return null
  return { id: String(user._id), email: user.email }
}

export async function deleteUserById(id: string): Promise<boolean> {
  const user = await User.findByIdAndDelete(id)
  return user !== null
}

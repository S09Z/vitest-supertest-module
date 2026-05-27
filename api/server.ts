import mongoose from 'mongoose'
import { configureApp } from './app.js'

const PORT = Number(process.env.API_APP_PORT ?? 3000)
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/appdb'

await mongoose.connect(MONGO_URI)

const app = configureApp()

Bun.serve({ fetch: app.fetch, port: PORT })

console.log(`Server: http://localhost:${PORT}`)
console.log(`Docs:   http://localhost:${PORT}/ui`)

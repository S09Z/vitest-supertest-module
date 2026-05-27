import { describe, expect, it } from 'bun:test'
import './setup.js'
import { configureApp } from '../app.js'

const app = configureApp()

async function req(path: string, init?: RequestInit) {
  return app.request(path, init)
}

async function post(path: string, body: unknown) {
  return req(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/users/register', () => {
  it('returns 201 with { msg, code, status }', async () => {
    const res = await post('/api/users/register', { email: 'alice@example.com', password: 'secret123' })
    const body = await res.json()

    expect(res.status).toBe(201)
    expect(body.code).toBe(201)
    expect(body.status).toBe('Created')
    expect(body.msg).toMatchObject({ email: 'alice@example.com' })
    expect(body.msg.id).toBeDefined()
    expect(body.msg.password).toBeUndefined()
  })

  it('returns 400 when email is missing', async () => {
    const res = await post('/api/users/register', { password: 'secret123' })
    const body = await res.json()

    expect(res.status).toBe(400)
    expect(body.code).toBe(400)
    expect(body.status).toBe('Bad Request')
    expect(body.msg).toContain('email')
  })

  it('returns 400 when password is missing', async () => {
    const res = await post('/api/users/register', { email: 'bob@example.com' })
    const body = await res.json()

    expect(res.status).toBe(400)
    expect(body.code).toBe(400)
    expect(body.status).toBe('Bad Request')
    expect(body.msg).toContain('password')
  })

  it('returns 409 on duplicate email', async () => {
    await post('/api/users/register', { email: 'dup@example.com', password: 'secret123' })
    const res = await post('/api/users/register', { email: 'dup@example.com', password: 'secret123' })
    const body = await res.json()

    expect(res.status).toBe(409)
    expect(body.code).toBe(409)
    expect(body.status).toBe('Conflict')
    expect(body.msg).toBe('email already registered')
  })
})

describe('GET /api/users', () => {
  it('returns 200 with user list in msg', async () => {
    await post('/api/users/register', { email: 'alice@example.com', password: 'secret123' })

    const res = await req('/api/users')
    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.code).toBe(200)
    expect(body.status).toBe('OK')
    expect(body.msg).toHaveLength(1)
    expect(body.msg[0].email).toBe('alice@example.com')
  })
})

describe('GET /api/users/:id', () => {
  it('returns 200 with user in msg', async () => {
    const created = await (await post('/api/users/register', { email: 'alice@example.com', password: 'secret123' })).json()

    const res = await req(`/api/users/${created.msg.id}`)
    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.code).toBe(200)
    expect(body.status).toBe('OK')
    expect(body.msg.email).toBe('alice@example.com')
  })

  it('returns 404 for unknown id', async () => {
    const res = await req('/api/users/000000000000000000000000')
    const body = await res.json()

    expect(res.status).toBe(404)
    expect(body.code).toBe(404)
    expect(body.status).toBe('Not Found')
    expect(body.msg).toBe('user not found')
  })

  it('returns 400 for malformed id', async () => {
    const res = await req('/api/users/not-an-id')
    const body = await res.json()

    expect(res.status).toBe(400)
    expect(body.code).toBe(400)
    expect(body.status).toBe('Bad Request')
    expect(body.msg).toContain('id')
  })
})

describe('DELETE /api/users/:id', () => {
  it('deletes a user and returns 204 (no body)', async () => {
    const created = await (await post('/api/users/register', { email: 'alice@example.com', password: 'secret123' })).json()

    const del = await req(`/api/users/${created.msg.id}`, { method: 'DELETE' })
    expect(del.status).toBe(204)

    const check = await req(`/api/users/${created.msg.id}`)
    expect(check.status).toBe(404)
  })

  it('returns 404 when deleting unknown id', async () => {
    const res = await req('/api/users/000000000000000000000000', { method: 'DELETE' })
    const body = await res.json()

    expect(res.status).toBe(404)
    expect(body.code).toBe(404)
    expect(body.status).toBe('Not Found')
    expect(body.msg).toBe('user not found')
  })
})

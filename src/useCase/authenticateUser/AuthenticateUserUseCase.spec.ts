import request from 'supertest';

import app from './../../app';

describe('Authentication', () => {
  it('Must perform authentication using email and password.', async() => {
    const data = {
      email: 'gfrancodev@gmail.com',
      password: '12345678'
    }
    const response = await request(app).post('/authenticate').send(data)

    expect(response.status).toBe(200)
  })

  it('Must perform authentication using username and password.', async() => {
    const data = {
      username: 'gfrancdev',
      password: '12345678'
    }
    const response = await request(app).post('/authenticate').send(data)

    expect(response.status).toBe(200)
  })
})

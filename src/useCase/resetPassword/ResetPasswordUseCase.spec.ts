import request from 'supertest';

import app from './../../app';

describe('Reset Password', () => {
  it('Should return an error when resetting the password', async() => {
    const data = {
      email: 'teste@gmail.com',
      token: '$2b$10$19Czbxo0KbLFmU81x/p8veepXGO5sY72CW3Ve1F2AV6gmq6ajaaLK',
      password: '86491320j'
    }
    const response = await request(app).post('/reset_password').send(data)

    expect(response.status).toBe(400)
  })
})

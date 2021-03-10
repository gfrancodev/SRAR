import request from 'supertest';

import app from './../../app';

describe('Forgot Password', () => {
  it('Must request password recovery.', async() => {
    const data = {
      email: 'teste@gmail.com'
    }
    const response = await request(app).post('/forgot_password').send(data)

    expect(response.status).toBe(200)
  })

  it('Should return an error when trying to request recovery and password.', async() => {
    const data = {
      email: 'teskjkjkte@gmnail.com'
    }
    const response = await request(app).post('/forgot_password').send(data)

    expect(response.status).toBe(400)
  })
})

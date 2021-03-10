import request from 'supertest';

import app from './../../app';

describe('Register', ()=> {
  it('Must register a new user.', async() => {
    const data = {
      name: 'Teste',
      lastname: 'Sukjukjkddadper',
      email: 'testakhjkhkjdfgdfgjlkldaskjkjkde@gmail.com',
      username: 'Sukjugfkjkdgkjkddadpe',
      password: '12345678'
    }
    const response = await request(app).post('/register').send(data)

    expect(response.status).toBe(201)
  })

  it('Should return an error when registering.', async() => {
    const data = {
      name: 'Teste',
      lastname: 'Super',
      email: 'tester@gmail.com',
      username: 'teste',
      password: '12345678'
    }
    const response = await request(app).post('/register').send(data)

    expect(response.status).toBe(400)
  })

  it('Should return an error when registering.', async() => {
    const data = {
      name: 'Teste',
      lastname: 'Super',
      email: 'teste@gmail.com',
      username: 'testeg',
      password: '12345678'
    }
    const response = await request(app).post('/register').send(data)

    expect(response.status).toBe(400)
  })
})

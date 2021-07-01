import { Router } from 'express'
import {
  createUserController,
  authenticateUserController,
  forgotPasswordController,
  resetPasswordController
}
  from '../../useCases'

const routes = Router()

routes.post('/register', async (request, response) => {
  return await createUserController.handle(request, response)
})

routes.post('/authenticate', async (request, response) => {
  return await authenticateUserController.handle(request, response)
})

routes.post('/forgot_password', async (request, response) => {
  return await forgotPasswordController.handle(request, response)
})

routes.post('/reset_password', async (request, response) => {
  return await resetPasswordController.handle(request, response)
})

export default routes

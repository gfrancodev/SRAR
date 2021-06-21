import { Router } from 'express';
import { createUserController } from '@usecase/createUser';
import { authenticateUserController } from '@usecase/authenticateUser';
import { forgotPasswordController } from '@usecase/forgotPassword';
import { resetPasswordController } from '@usecase/resetPassword';

const routes = Router()

routes.post('/register', (request, response) => {
  return createUserController.handle(request, response);
})

routes.post('/authenticate', (request, response) => {
  return authenticateUserController.handle(request, response);
})

routes.post('/forgot_password', (request, response) => {
  return forgotPasswordController.handle(request, response);
})

routes.post('/reset_password', (request, response) => {
  return resetPasswordController.handle(request, response);
})

export default routes

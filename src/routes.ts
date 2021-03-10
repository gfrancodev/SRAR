import { Router } from 'express';
import { createUserController } from './useCase/createUser';
import { authenticateUserController } from './useCase/authenticateUser';
import { forgotPasswordController } from './useCase/forgotPassword';
import { resetPasswordController } from './useCase/resetPassword';
import { Middleware } from './middleware/implementations/Middleware';

const middleware = new Middleware();

const routes = Router();

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

routes.get('/home', middleware.private, (request, response) => {
    const id = request.params.userId;
    return response.status(200).json({ id });
})

export default routes

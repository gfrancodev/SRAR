import { Router } from 'express'
import { Middleware } from 'src/middleware/implementations/Middleware'

const routes = Router()
const middleware = new Middleware()

routes.get('/app/', middleware.bearer, (request: any, response) => {
  return response.status(200).json({ id: request.params.userId })
})

export default routes

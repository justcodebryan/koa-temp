import Koa from 'koa'
import Router from 'koa-router'
import * as UserController from './controller/user'
import { DEFAULT_PREFIX } from './utils/constant'

const router = new Router({
  prefix: DEFAULT_PREFIX,
})

const initRouter = (app: Koa) => {
  // prefix with /user router
  router.get('/users', UserController.getUserList)
  router.get('/user/:id', UserController.getUserDetail)
  router.post('/user', UserController.createUser)
  router.put('/user/:id', UserController.updateUser)
  router.del('/user/:id', UserController.deleteUser)

  app.use(router.routes()).use(router.allowedMethods())
}

export default initRouter

// import module-alias to use module alias
require('module-alias/register')

import Koa from 'koa'
import initCore from './app'
import siteConfig from './config/siteConfig'
import initMiddleware from './middleware'
import initRouter from './router'
import { DEFAULT_PORT } from './utils/constant'

const PORT = siteConfig.port || DEFAULT_PORT

const app = new Koa()

initMiddleware(app)
initRouter(app)

initCore(app, PORT)

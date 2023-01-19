import Koa from 'koa'
import bodyParserMiddleware from './bodyParserMiddleware'
import errorMiddleware from './errorMiddleware'
import loggerMiddleware from './loggerMiddleware'

const initMiddleware = (app: Koa) => {
  loggerMiddleware(app)
  bodyParserMiddleware(app)
  errorMiddleware(app)
}

export default initMiddleware

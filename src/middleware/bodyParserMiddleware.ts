import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { ErrorCodeEnum } from '@/config/exceptionConfig'

const bodyParserMiddleware = (app: Koa) => {
  app.use(
    bodyParser({
      onerror: function (err, ctx) {
        ctx.throw(ErrorCodeEnum.UNKNOWN_ERROR, 'body parse error')
      },
    })
  )
}

export default bodyParserMiddleware

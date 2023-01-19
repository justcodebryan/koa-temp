import Koa from 'koa'
import { ErrorCodeEnum, getErrorException } from '@/config/exceptionConfig'
import resolver from '@/utils/Resolver'

const errorHandler = async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.statusCode || error.status || ErrorCodeEnum.SEVER_INTERNAL_ERROR
    error.status = ctx.status
    ctx.body = resolver.fail(
      getErrorException(ErrorCodeEnum.SEVER_INTERNAL_ERROR),
      ErrorCodeEnum.SEVER_INTERNAL_ERROR,
      error
    )
    ctx.app.emit('error', error, ctx)
  }
}

const errorMiddleware = (app: Koa) => {
  app.use(errorHandler)
  app.on('error', console.error)
}

export default errorMiddleware

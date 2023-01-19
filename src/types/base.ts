import Koa from 'koa'
import Router from 'koa-router'

export type MiddlewareFn = (app: Koa) => void

export type BaseContext = Koa.Context

export type Context<TParams extends object = any, TBody extends object = any> = BaseContext &
  Router.RouterContext<TParams> & {
    body: TBody
    request: {
      body: TBody
    }
  }

type BaseResponse = {
  msg?: string
}

export type ErrorResponse<TError extends Error = any> = BaseResponse & {
  err?: TError
  errorCode: number
}

export type SuccessResponse = BaseResponse & {
  code?: number
}

export type Response<TData extends object = any> = BaseResponse & {
  code?: number
  errorCode?: number
  data?: TData
}

export type PaginationResponse<TData extends object = any> = Response<TData> & {
  total?: number
}

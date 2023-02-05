import type Koa from 'koa'
import type { RouterContext } from 'koa-router'

// Common Types
export type EmptyObject = Record<string | number | symbol, never>

export type AnyObject = Record<string | number | symbol, any>

export type MiddlewareFn = (app: Koa) => void

export type ParsedUrlQueryParams = string | string[]

// Koa Context Data Type
export type BaseContext = Koa.Context

export type Context = BaseContext & RouterContext

// Response Data Type
export type BaseResponseData = AnyObject

export type PaginationResponseData<TData extends object = AnyObject> = BaseResponseData & {
  items: TData[]
  total?: number
}

export type BaseError = Error

type BaseResponse = {
  msg?: string
}

export type ErrorResponse<TError extends BaseError = Error> = BaseResponse & {
  err?: TError
  errorCode: number
}

export type SuccessResponse = BaseResponse & {
  code?: number
}

export type Response<TData extends BaseResponseData | PaginationResponseData = any> = BaseResponse & {
  code?: number
  errorCode?: number
  data?: TData
}

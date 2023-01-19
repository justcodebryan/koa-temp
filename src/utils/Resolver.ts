import type { ErrorResponse, Response, SuccessResponse } from '@/types/base'

class Resolver {
  public static _resolver: Resolver = new Resolver()

  private constructor() {
    if (Resolver._resolver) {
      throw new Error('[error]: Instantiation failed: Use Resolver.getInstance() instead of new.')
    }
    Resolver._resolver = this
  }

  public static getInstance() {
    return Resolver._resolver
  }

  // TODO: Type restrict
  public fail(msg = 'fail', errorCode = 10001, err = {}): ErrorResponse {
    return {
      msg,
      err,
      errorCode,
    }
  }

  public success(msg = 'success', code = 200): SuccessResponse {
    return {
      msg,
      code,
    }
  }

  public json<TData extends object = any>(
    data: TData,
    msg = 'success',
    code = 200,
    errorCode?: number
  ): Response<TData> {
    return {
      code,
      msg,
      errorCode: errorCode ? errorCode : undefined,
      data,
    }
  }
}

const globalResolver = Resolver.getInstance()

export default globalResolver

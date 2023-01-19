export enum ErrorCodeEnum {
  SEVER_INTERNAL_ERROR = 500,
  UNKNOWN_ERROR = 422,
}

export const ErrorExceptionMap: Record<ErrorCodeEnum, string> = {
  [ErrorCodeEnum.UNKNOWN_ERROR]: 'Unknown Error',
  [ErrorCodeEnum.SEVER_INTERNAL_ERROR]: 'Server Internal Error',
}

export const getErrorException = (errorCode: ErrorCodeEnum) =>
  ErrorExceptionMap[errorCode] ? ErrorExceptionMap[errorCode] : 'Unknown'

export const getOffsetAndLimit = (current: string | string[], pageSize: string | string[]) => {
  const limit = Number(pageSize)
  const offset = (Number(current) - 1) * limit

  return {
    offset,
    limit,
  }
}

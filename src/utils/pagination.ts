import type { ParsedUrlQueryParams } from '@/types/base'

export const getOffsetAndLimit = (
  current: ParsedUrlQueryParams,
  pageSize: ParsedUrlQueryParams
): {
  limit: number
  offset: number
} => {
  const limit = Number(pageSize)
  const offset = (Number(current) - 1) * limit

  return {
    offset,
    limit,
  }
}

export default class Pagination {
  page: number
  pageSize: number
  total: number

  constructor(page: number, pageSize: number, total: number) {
    this.page = page
    this.pageSize = pageSize
    this.total = total
  }

  get startIndex(): number {
    return (this.page - 1) * this.pageSize
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.pageSize, this.total)
  }

  get hasPrevPage(): boolean {
    return this.page > 1
  }

  get hasNextPage(): boolean {
    return this.endIndex < this.total
  }
}

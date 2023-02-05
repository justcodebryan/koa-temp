import type { Context } from 'koa'
import UserService from '@/service/user'
import resolver from '@/utils/resolver'
import Pagination from '@/utils/pagination'
import type { UserRequestData } from '@/types/user'

export const getUserList = async (ctx: Context) => {
  const service = new UserService()

  const {
    request: { query },
  } = ctx

  const { current, page_size } = query

  const total = await service.getUserTotal()
  const page = Number(current)
  const pageSize = Number(page_size)

  const pagination = new Pagination(page, pageSize, total)

  const result = await service.getUserList(pagination.startIndex, pagination.endIndex)

  ctx.body = resolver.json({
    items: result,
    total,
  })
}

export const getUserDetail = async (ctx: Context) => {
  const service = new UserService()

  const {
    params: { id },
  } = ctx

  const result = await service.user(id)

  ctx.body = resolver.json(result)
}

export const createUser = async (ctx: Context) => {
  const service = new UserService()

  const {
    request: { body },
  } = ctx

  const { name, password, gender, status, email } = body as UserRequestData

  const result = await service.createUser({
    name,
    password,
    gender,
    status,
    email,
  })

  ctx.body = resolver.json(result)
}

export const updateUser = async (ctx: Context) => {
  const service = new UserService()

  const {
    request: { body },
    params,
  } = ctx

  const { id } = params
  const { name, password, gender, status, email, remark } = body as UserRequestData

  try {
    await service.updateUser(id, {
      name,
      password,
      gender,
      status,
      email,
      remark,
    })
    ctx.body = resolver.success()
  } catch (err) {
    console.error(err)
    ctx.body = resolver.fail()
  }
}

export const deleteUser = async (ctx: Context) => {
  const service = new UserService()

  const { params } = ctx

  const { id } = params

  await service.deleteUser(id)

  ctx.body = resolver.success()
}

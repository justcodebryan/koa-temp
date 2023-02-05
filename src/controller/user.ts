import type { Context } from 'koa'
import UserService from '@/service/user'
import resolver from '@/utils/Resolver'
import { getOffsetAndLimit } from '@/utils/pagination'
import type { UserRequestData } from '@/types/user'

const service = new UserService()

export const getUserList = async (ctx: Context) => {
  const {
    request: { query },
  } = ctx

  const { current, page_size } = query

  const { offset, limit } = getOffsetAndLimit(current, page_size)
  const result = await service.users(offset, limit)

  ctx.body = resolver.json({
    ...result,
  })
}

export const getUserDetail = async (ctx: Context) => {
  const {
    params: { id },
  } = ctx

  const result = await service.user(id)

  ctx.body = resolver.json(result)
}

export const createUser = async (ctx: Context) => {
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
  const { params } = ctx

  const { id } = params

  await service.deleteUser(id)

  ctx.body = resolver.success()
}

import Koa from 'koa'
import UserService from '@/service/user'
import resolver from '@/utils/Resolver'
import { Context } from '@/types/base'
import { getOffsetAndLimit } from '@/utils/pagination'

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

export const getUserDetail = async (ctx: Koa.Context) => {
  const {
    params: { id },
  } = ctx

  const result = await service.user(id)

  ctx.body = resolver.json(result)
}

export const createUser = async (ctx) => {
  const {
    request: { body },
  } = ctx

  const { name, password, gender, status, email } = body

  const result = await service.createUser({
    name,
    password,
    gender,
    status,
    email,
  })

  ctx.body = resolver.json(result)
}

export const updateUser = async (ctx) => {
  const {
    request: { body },
    params,
  } = ctx

  const { id } = params
  const { name, password, gender, status, email, remark } = body

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

export const deleteUser = async (ctx) => {
  const { params } = ctx

  const { id } = params

  await service.deleteUser(id)

  ctx.body = resolver.success()
}

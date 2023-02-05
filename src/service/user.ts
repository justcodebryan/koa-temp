import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/utils/constant'
import User from '@/model/user'
import type { UserRequestData } from '@/types/user'

class UserService {
  async users(offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT) {
    const data = await User.findAll({ offset, limit })
    const total = await User.count()

    return {
      items: data,
      total,
    }
  }

  async user(id: string) {
    return User.findByPk(id)
  }

  async createUser({ name, password, gender, email, status, remark = null }: UserRequestData) {
    return User.create({
      name,
      password,
      gender,
      email,
      remark,
      status,
    })
  }

  async updateUser(id: string, { name, password, gender, email, status, remark }: UserRequestData) {
    return User.update(
      {
        name,
        password,
        gender,
        email,
        status,
        remark,
      },
      {
        where: {
          id,
        },
      }
    )
  }

  async deleteUser(id: string) {
    return User.destroy({
      where: {
        id,
      },
    })
  }
}

export default UserService

import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/utils/constant'
import User from '@/model/user'

class UserService {
  async users(offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT) {
    const data = await User.findAll({ offset, limit })
    const total = await User.count()

    return {
      items: data,
      total,
    }
  }

  async user(id) {
    return User.findByPk(id)
  }

  async createUser({ name, password, gender, email, status, remark = null }) {
    return User.create({
      name,
      password,
      gender,
      email,
      remark,
      status,
    })
  }

  async updateUser(id, { name, password, gender, email, status, remark }) {
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

  async deleteUser(id) {
    return User.destroy({
      where: {
        id,
      },
    })
  }
}

export default UserService

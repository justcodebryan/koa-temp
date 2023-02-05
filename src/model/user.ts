import type { CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize'
import { DataTypes } from 'sequelize'
import sequelize from '@/utils/sequelize'

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id?: CreationOptional<number>
  name: string
  password: string
  gender: string
  email: string
  remark?: CreationOptional<string>
  status: number
}

const User = sequelize.define<UserModel>('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remark: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

export default User

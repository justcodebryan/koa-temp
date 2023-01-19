import { Sequelize } from 'sequelize'
import dbConfig, { sequelizeOptions } from '@/config/dbConfig'
import { DEFAULT_PORT } from './constant'

const { database, username, password, host, port } = dbConfig

const sequelize = new Sequelize(database, username, password, {
  ...sequelizeOptions,
  host,
  port: Number(port) || DEFAULT_PORT,
})

// sequelize.sync().then(() => {
//   console.log('[db]: All models were synchronized successfully.')
// })

sequelize
  .authenticate()
  .then(() => {
    console.log('[db]: Database Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('[db]: Unable to connect to the database.', `\n[error]: ${err}.`)
  })

export default sequelize

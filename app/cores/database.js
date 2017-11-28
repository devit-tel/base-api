import Mongoose from 'mongoose'

export function init () {
  let app = router.get()
  const databaseConfig = config.database

  mongoose.connect(`mongodb://${databaseConfig.user}:${databaseConfig.password}@${databaseConfig.uri}/${databaseConfig.name}`)
}

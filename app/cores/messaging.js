import {config} from 'app/cores/config'
import loader from 'app/cores/libraries/loader'
import {setupConnection} from 'amqp-node'

export async function init () {
  const messagingConfig = config.messaging
  await setupConnection({
    uri: messagingConfig.uri,
    user: messagingConfig.user,
    password: messagingConfig.password,
    reconnectIntervalLimit: 10,
    reconnectTime: 1000
  })

  const loaderConfig = config.app.loader.messaging
  let messagings = loader(loaderConfig.path, loaderConfig.extension)
  for (let key in messagings) {
    messagings[key]()
  }
}

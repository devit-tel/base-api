import {receiveTopic} from 'amqp-node'
import {config} from 'app/cores/config'

const messagingConfig = config.messaging

function forward () {
  return receiveTopic(messagingConfig.exchangeName, 'caller', 'callWithRetrying', async function (message) {
    console.log(" [x] %s:'%s'", message.fields.routingKey, message.content.toString())
  }, {exclusive: false})
}

export default async function init () {
  await forward()
}

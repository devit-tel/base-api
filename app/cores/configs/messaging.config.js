export default {
  queueName: 'api.2stage',
  exchangeName: 'api.2stage',
  uri: process.env.NODE_ENV === 'production' ? 'api.sendit.asia'
    : process.env.NODE_ENV === 'staging' ? 'staging.api.sendit.asia'
    : process.env.NODE_ENV === 'development' ? 'development.api.sendit.asia' : 'localhost:3100',
  user: process.env.AMQP_USER,
  password: process.env.AMQP_PASS
}

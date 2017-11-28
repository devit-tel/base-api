export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  debug: process.env.DEBUG,
  stackTrace: process.env.STACK_TRACE === 'true',
  loader: {
    config: {
      path: 'app/cores/configs',
      extension: 'config'
    },
    router: {
      path: 'app/apis',
      extension: 'route'
    },
    middleware: {
      path: 'app/cores/middlewares',
      extension: 'middleware'
    },
    middlewareRoute: {
      path: 'app/cores/middlewares',
      extension: 'middleware-route'
    },
    messaging: {
      path: 'app/messaging',
      extension: 'messaging'
    }
  },
  baseURI: process.env.BASE_URI || ''
}

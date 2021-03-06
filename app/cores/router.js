import KoaRouter from 'koa-router'
import loader from 'app/cores/libraries/loader'
import {config} from 'app/cores/config'
import responseFormatterMiddleware from 'app/cores/middlewares/response-formatter.middleware-standalone'
/**
  {
    method: [GET|POST|PUT|DELETE]
    url: STRING,
    handler: STRING,
    middlewares: [],
    auth: ARRAY|BOOLEAN,
    scope: ? (Haven't implemented yet)
 }
 **/
let routerObject = {}
export function init () {
  const routerLoaderConfig = config.app.loader.router
  const middlwareLoaderConfig = config.app.loader.middlewareRoute
  routerObject = new KoaRouter({prefix: config.app.baseURI})
  responseFormatterMiddleware(routerObject)
  // Get route middlewares
  let middlewares = loader(middlwareLoaderConfig.path, middlwareLoaderConfig.extension)
  for (let key in middlewares) {
    middlewares[key](routerObject)
  }

  // Get routes
  let routeConfigs = loader(routerLoaderConfig.path, routerLoaderConfig.extension)

  // Handle all options
  routerObject.options('*', function () {})

  // Register routes
  for (let key in routeConfigs) {
    let routeConfig = routeConfigs[key]
    let routes = routeConfig.routes
    let controller = routeConfig.controller
    if (!routeConfig) {
      return
    }
    routes.forEach((route) => {
      let middlewares = route.middlewares || []
      routerObject[route.method.toLowerCase()](route.url, ...middlewares, controller[route.handler])
    })
  }
}

export let router = {
  get: function () {
    return routerObject
  }
}

import SystemController from 'app/apis/system.controller'

export default {
  controller: new SystemController(),
  routes: [
    {method: 'GET', 'url': '/system/health', handler: 'getHealth'}
  ]
}

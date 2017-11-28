var dotenv = require('dotenv')
var debug = require('debug')('worker')

debug('Initial babel and load environment variable')
require('babel-register')({
  extensions: ['.es6', '.es', '.jsx', '.js']
})
require('babel-polyfill')
dotenv.config({silent: true})
dotenv.load()

if (process.env.NODE_CLUSTER.toLowerCase() === 'true') {
  var cluster = require('cluster')
  var control = require('strong-cluster-control')
  var http = require('http')

  control.start({
    size: control.CPUS,
    shutdownTimeout: 5000,
    terminateTimeout: 5000,
    throttleDelay: 5000
  }).on('error', function (err) {
    debug('Found error on worker "%s"', err)
    // don’t need to manually restart the workers
  })

  if (cluster.isWorker) {
    debug('Initial worker')
    require('./app/app').getServer().then(function (server) {
      http.createServer(server.callback()).listen(process.env.PORT)
    })
    .catch((error) => {
      console.log(error)
      process.exit(1)
    })
  } else {
    debug('Cluster options has been enabled then trying to initial master node')
    debug('There are %s workers will be started', control.CPUS)
  }
} else {
  debug('Cluster options has been disabled then start single worker node')
  require('./app/app').start()
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
}

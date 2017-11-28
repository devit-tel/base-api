import mathjs from 'mathjs'
// Enable mathjs to support 64 precision
mathjs.config({number: 'BigNumber', precision: 64})

const BOOTSTRAP_PATH = {
  // Load all route
  ROUTER: 'app/cores/router',
  // Server
  SERVER: 'app/cores/server',
  // Load all Middleware
  MIDDLEWARE: 'app/cores/middleware'
}

export default async function () {
  for (let key in BOOTSTRAP_PATH) {
    await require(BOOTSTRAP_PATH[key]).init()
  }
  return true
}

export function getLoadedServer () {
  return require(BOOTSTRAP_PATH.SERVER).server
}

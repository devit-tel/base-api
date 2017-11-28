let semver = require('semver')
let engines = require('./package').engines

const version = engines.node
if (!semver.satisfies(process.version, version)) {
  console.log(`Required node version ${version} not satisfied with current version ${process.version}.`)
  process.exit(1)
}

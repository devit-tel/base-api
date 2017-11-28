import {config} from 'app/cores/config'
import dot from 'dot'

const dots = dot.process({path: config.template.path})

export function getTemplate (templateName, interpolateData) {
  return dots[templateName](interpolateData)
}

const BackSass = require('back-sass');

const configKey = query.config || 'backSass'

module.exports = function (content) {
  var config
  if (this.config[configKey]) {
    config = this.config[configKey]
  } else {
    config = {
      includeComments: true
    }
  }
  return BackSass.fromString(content, config.includeComments).toSCSS()
}

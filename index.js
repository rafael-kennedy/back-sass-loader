const BackSass = require('back-sass');

const configKey = 'backSass'

module.exports = function (content) {
  var config
  if (this.config && this.config[configKey]) {
    config = this.config[configKey]
  } else {
    config = {
      includeComments: true
    }
  }
  return BackSass.fromString(content, config.includeComments).toSCSS()
}

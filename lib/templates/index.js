/**
 * Module dependencies
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */
module.exports = _.extend(
  require('./check'),
  require('./config'),
  require('./devs'),
  require('./null'),
  require('./pools'),
  require('./stats'),
  require('./summary'),
  require('./version')
);

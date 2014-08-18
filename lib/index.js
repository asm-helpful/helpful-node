var Client = require('./helpful/client');

// Export module
var helpful = module.exports;

/**
 * This file contains the global namespace for the module
 */
helpful.client = function(auth, options) {
  return new Client(auth, options);
};

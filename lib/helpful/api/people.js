/**
 * People who operate or interacted with the account
 */
var People = function(client) {
  this.client = client;

  return this;
};

/**
 * List all people in the account the user has access to
 *
 * '/accounts/:account_id/people' GET
 *
 * @param "account_id" Identifier of the account
 */
People.prototype.all = function (account_id, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('/accounts/' + account_id + '/people', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = People

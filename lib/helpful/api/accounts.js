/**
 * These are like organizations which use Helpful.
 */
var Accounts = function(client) {
  this.client = client;

  return this;
};

/**
 * All the accounts the user has access to
 *
 * '/accounts' GET
 */
Accounts.prototype.list = function (options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('/accounts', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Get an account the user has access to
 *
 * '/accounts/:account_id' GET
 *
 * @param "account_id" Identifier of the account
 */
Accounts.prototype.get = function (account_id, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('/accounts/' + account_id + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Update an account the user has access to
 *
 * '/accounts/:account_id' PATCH
 *
 * @param "account_id" Identifier of the account
 */
Accounts.prototype.update = function (account_id, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['body'] ? options['body'] : {});

  this.client.patch('/accounts/' + account_id + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Accounts

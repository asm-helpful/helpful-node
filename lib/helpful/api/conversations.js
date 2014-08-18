/**
 * Conversations in an account
 */
var Conversations = function(client) {
  this.client = client;

  return this;
};

/**
 * List all conversations in an account the user has access to
 *
 * '/accounts/:account_id/conversations' GET
 *
 * @param "account_id" Identifier of the account
 */
Conversations.prototype.list = function (account_id, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('/accounts/' + account_id + '/conversations', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Create an empty conversation in account the user has access to
 *
 * '/accounts/:account_id/conversations' POST
 *
 * @param "account_id" Identifier of the account
 */
Conversations.prototype.create = function (account_id, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['body'] ? options['body'] : {});

  this.client.post('/accounts/' + account_id + '/conversations', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Get a conversation the user has access to
 *
 * '/conversations/:conversation_id' GET
 *
 * @param "conversation_id" Identifier of the conversation
 */
Conversations.prototype.get = function (conversation_id, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('/conversations/' + conversation_id + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Conversations

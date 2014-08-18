/**
 * Messages in a conversation
 */
var Messages = function(client) {
  this.client = client;

  return this;
};

/**
 * Get a message the user has access to
 *
 * '/messages/:message_id' GET
 *
 * @param "message_id" Identifier of the message
 */
Messages.prototype.get = function (message_id, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('/messages/' + message_id + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Messages

/**
 * Main client for the module
 */
var Client = function(auth, options) {
  this.httpClient = new (require('./http_client').HttpClient)(auth, options);

  return this;
};

/**
 * These are like organizations which use Helpful.
 */
Client.prototype.accounts = function () {
    return new (require('./api/accounts'))(this.httpClient);
};

/**
 * People who operate or interacted with the account
 */
Client.prototype.people = function () {
    return new (require('./api/people'))(this.httpClient);
};

/**
 * Conversations in an account
 */
Client.prototype.conversations = function () {
    return new (require('./api/conversations'))(this.httpClient);
};

/**
 * Messages in a conversation
 */
Client.prototype.messages = function () {
    return new (require('./api/messages'))(this.httpClient);
};

// Export module
module.exports = Client;

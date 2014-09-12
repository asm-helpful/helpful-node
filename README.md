# helpful-node

Official Helpful API library client for node.js

__This library is generated by [alpaca](https://github.com/pksunkara/alpaca)__

## Installation

Make sure you have [npm](https://npmjs.org) installed.

```bash
$ npm install helpful-client
```

#### Versions

Works with [ 0.8 / 0.9 / 0.10 / 0.11 ]

## Usage

```js
var helpful = require('helpful-client');

// Then we instantiate a client (as shown below)
```

### Build a client

__Using this api without authentication gives an error__

##### Basic authentication

```js
var auth = { username: 'pksunkara', password: 'password' };

var client = helpful.client(auth, clientOptions);
```

##### Oauth access token

```js
var client = helpful.client('1a2b3', clientOptions);
```

##### Oauth client secret

```js
var client = helpful.client({
    client_id: '09a8b7',
    client_secret: '1a2b3'
}, clientOptions);
```

### Client Options

The following options are available while instantiating a client:

 * __base__: Base url for the api
 * __api_version__: Default version of the api (to be used in url)
 * __user_agent__: Default user-agent for all requests
 * __headers__: Default headers for all requests
 * __request_type__: Default format of the request body

### Response information

__All the callbacks provided to an api call will receive the response as shown below__

```js
// You can also omit the 'methodOptions' param below
client.klass('args').method('args', methodOptions, function (err, response) {
    if (err) console.log(err);

    response.code;
    // >>> 200

    response.headers;
    // >>> {'x-server': 'apache'}
}
```

##### JSON response

When the response sent by server is __json__, it is decoded into a hash

```js
response.body;
// >>> {'user': 'pksunkara'}
```

### Method Options

The following options are available while calling a method of an api:

 * __api_version__: Version of the api (to be used in url)
 * __headers__: Headers for the request
 * __query__: Query parameters for the url
 * __body__: Body of the request
 * __request_type__: Format of the request body

### Request body information

Set __request_type__ in options to modify the body accordingly

##### RAW request

When the value is set to __raw__, don't modify the body at all.

```js
body = 'username=pksunkara';
// >>> 'username=pksunkara'
```

##### JSON request

When the value is set to __json__, JSON encode the body.

```js
body = {'user': 'pksunkara'};
// >>> '{"user": "pksunkara"}'
```

### Accounts api

These are like organizations which use Helpful.

```js
var accounts = client.accounts();
```

##### List all accounts (GET /accounts)

All the accounts the user has access to

```js
accounts.all(options, callback);
```

##### Retrieve an account (GET /accounts/:account_id)

Get an account the user has access to

The following arguments are required:

 * __account_id__: Identifier of the account

```js
accounts.get("b3ebe711-755e-4a91-b8d2-0cc028827bcf", options, callback);
```

##### Update an account (PATCH /accounts/:account_id)

Update an account the user has access to

The following arguments are required:

 * __account_id__: Identifier of the account

```js
accounts.update("b3ebe711-755e-4a91-b8d2-0cc028827bcf", options, callback);
```

### People api

People who operate or interacted with the account

```js
var people = client.people();
```

##### List all people (GET /accounts/:account_id/people)

List all people in the account the user has access to

The following arguments are required:

 * __account_id__: Identifier of the account

```js
people.all("b3ebe711-755e-4a91-b8d2-0cc028827bcf", options, callback);
```

### Conversations api

Conversations in an account

```js
var conversations = client.conversations();
```

##### List all conversations (GET /accounts/:account_id/conversations)

List all conversations in an account the user has access to

The following arguments are required:

 * __account_id__: Identifier of the account

```js
conversations.all("b3ebe711-755e-4a91-b8d2-0cc028827bcf", "false", options, callback);
```

##### Create a conversation (POST /accounts/:account_id/conversations)

Create an empty conversation in account the user has access to

The following arguments are required:

 * __account_id__: Identifier of the account

```js
conversations.create("b3ebe711-755e-4a91-b8d2-0cc028827bcf", options, callback);
```

##### Retrieve a conversation (GET /conversations/:conversation_id)

Get a conversation the user has access to

The following arguments are required:

 * __conversation_id__: Identifier of the conversation

```js
conversations.get("10ce24de-23f6-433f-9a71-255cffffa96f", options, callback);
```

### Messages api

Messages in a conversation

```js
var messages = client.messages();
```

##### Retrieve a message (GET /messages/:message_id)

Get a message the user has access to

The following arguments are required:

 * __message_id__: Identifier of the message

```js
messages.get("33314e4e-baf5-4b33-be72-112ed86701fd", options, callback);
```

## Contributors
Here is a list of [Contributors](https://github.com/asm-helpful/helpful-node/contributors)

### TODO

## License
MIT

## Bug Reports
Report [here](https://github.com/asm-helpful/helpful-node/issues).

## Contact
Pavan Kumar Sunkara (pavan.sss1991@gmail.com)

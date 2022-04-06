# activity-feed-pusher-react
This application shows how to integrate Pusher with a Node.js/Express/MongoDB backend and React in the front-end.

## Getting Started
1. Create an app on Pusher and copy your app's id, key, and secret.`</br>
```
routes/api.js
```
```
const pusher = new Pusher({
    appId: "<Pusher App ID>",
    key: "<Pusher Api Key>",
    secret: "<Pusher Secret>",
    cluster: "<Pusher cluster>",
    useTLS: true,
});
```
And
```
views/index.ejs
```
```
var PUSHER_APP_KEY = "<Pusher Api Key>";
```
2. Clone this repository and `cd` into it.
3. Start the MongoDB server
4. Execute `npm install` to download dependencies.

### You can add data with following ways
1. Go to `http://localhost:3000` and start sending playing with the app using [Postman](https://www.getpostman.com/) to communicate with the API or the Pusher console to test only the front-end part. 
* We have used AJAX requests for Demo


### Prerequisites
- [A free Pusher account](https://pusher.com)
- [Node.js](https://nodejs.org/en/download/) version 5 or greater
- [A MongoDB database](https://www.mongodb.com/download-center?jmp=nav#community)

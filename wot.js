var server = require('./wot-server');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });


server();

// Starting an insecure (HTTP/WS) server on port 8787:
// server(8787, false);

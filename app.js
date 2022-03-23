var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);

var config = require(path.resolve(__dirname, 'server/config.json'));

config.password = config.password || "supersecret";

// Serve the public folder statically
app.use(express.static(path.join(__dirname, 'public')));

var server_port = config.port;
http.listen(server_port, "localhost", () => {
  console.log(`app running at port ${server_port}`);
});

// Create the game serve  | 

var GameServer = require('./server/server.js');

var server = new GameServer(http, config);
server.begin();


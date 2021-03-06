var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var fs = require('fs');
var inpFile = "index.html";
var buffer = fs.readFileSync(inpFile);
var output = buffer.toString();

var express = require("express");
var app = express();


var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log("Listening on port " + port);
});


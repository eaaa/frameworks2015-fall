var express = require("express"),
	path = require("path");
	
var app = express();

app.use(express.static(path.join(__dirname, '../client')));


var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log("Listening on port " + port);
});


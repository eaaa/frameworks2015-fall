var express = require("express");
var app = express();
app.use(express.static(__dirname + '/'));

app.get("/hello", function(req, res){
	res.json(
		{message: "Hello World from Node.js"}
	);
});

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log("Listening on port " + port);
});


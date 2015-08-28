var express 	= require("express"),
	mongoose 	= require("mongoose"),
	dbname		= "skeleton";

var app = express();
app.use(express.static(__dirname + '/'));

mongoose.connect("mongodb://localhost/" + dbname);
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function(callback){
	console.log("MongoDB connection established to " + dbname);
});

var Schema = mongoose.Schema;
var messageSchema = new Schema({
	message: String
}, {collection: "message"});
var MessageModel = mongoose.model("skeleton", messageSchema);

// UNCOMMENT THIS TO ADD SAMPLE DATA TO COLLECTION IN MONGODB
// Remember to start Mongo: mongod in the terminal
/* 

MessageModel.remove({}, function(err, data){
	MessageModel.create({message: "Hello World from MongoDB"});
	MessageModel.create({message: "Message #2"});
});

*/

app.get("/hello", function(req, res){
	MessageModel.find(function(err, data){
		if(err){
			console.error(err);
		}
		console.log(data);
		res.json(data);
	});
});

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log("Listening on port " + port);
});


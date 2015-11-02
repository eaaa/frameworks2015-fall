var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	firstname: String,
	lastname: String,
	username: String,
	password: String,
	email: String,
}, {collection: "user"});

var User = mongoose.model("User", userSchema);

User.remove({}, function(err, data){
	User.create({firstname: "Niels", lastname: "Hansen", username: "niha", password: "1234", email: "niha@eaaa.dk"});
	User.create({firstname: "Slein", lastname: "Nesnah", username: "ahin", password: "4321", email: "ahin@aaae.dk"});
});

module.exports = User;
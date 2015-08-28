var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var skeletonSchema = new Schema({
	message: String
});

var SkeletonModel = mongoose.model("Skeleton", skeletonSchema);

module.exports = SkeletonModel;


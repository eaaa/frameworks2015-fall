var gulp 	= require('gulp'),
	nodemon = require('nodemon'),
	config 	= require("./gulp.config")();

gulp.task('default', function(){

	var options = {
		script: config.script,
		watch: config.watch
	};

	return nodemon(options)
		.on("start", function(){
			console.log("nodemon started");
		})
		.on("restart", function(){
			console.log("nodemon restarted");
		});
});
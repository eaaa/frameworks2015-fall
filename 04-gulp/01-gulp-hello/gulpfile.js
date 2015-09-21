var gulp = require("gulp");

gulp.task("default", function(){
	console.log("Hello World");
});

gulp.task("javascript", [], function(){
	console.log("Checking JavaScript");
});

gulp.task("html", [], function(){
	console.log("Building HTML");
});

gulp.task("build", ["javascript", "html"], function(){
	console.log("Everything built");
});
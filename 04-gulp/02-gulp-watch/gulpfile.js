var gulp = require("gulp");

gulp.task("default", function(){
	gulp
		.watch(['./src/**/*.js'], ['checking'])
		.on('change', function(e){
			console.log('The file: ' + e.path + ' was ' + e.type);
		});
});

gulp.task("checking", function(){
	console.log("checking");
});

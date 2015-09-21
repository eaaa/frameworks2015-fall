var gulp = require("gulp");

gulp.task("default", function(){
	return gulp.src("./src/client/*")
		.pipe(gulp.dest("./dist/client"));
});

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    nodemon		= require('nodemon'),
    sass        = require('gulp-sass'),
    config 		= require("./gulpconfig")();

gulp.task("nodemon", function(){
	var options = {
		script: config.server,
		watch: config.root
	};

	return nodemon(options)
		.on("start", function(){
			console.log("nodemon started");
			startBrowserSync();
		})
		.on("restart", function(){
			console.log("nodemon restarted");
		})
})



gulp.task("sass", function(){
    gulp.src(config.sass)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(config.css)); 
});

gulp.task("watchers", function(){
   gulp.watch(config.sass, ['sass']); 
});

gulp.task("default", ["nodemon", "watchers"]);

function startBrowserSync(){
	if(browserSync.active){
		return;
	}
	console.log("browserSync starting");

	var options = {
		proxy: 'localhost:' + config.nodeServerPort,
        port: config.browserSyncPort,
		ghostMode: {
			scroll: true
		},
		browser: config.browsers,
		files: config.browserSyncFiles
	}
	browserSync(options);		
}
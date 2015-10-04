function gulpConfig(){
    "use strict";
	var root 	= "./src/";
	var client 	= root + "public/";
	var	server 	= root + "bin/www";
	
	var config = {
		root: root,
		client: client,
		browserSyncFiles: [client + "**/*", root + "views"],
		browserSyncPort: 4000,
		nodeServerPort: 3000,
		server: server,
        browsers: "firefox",
        sass: client + "sass/*.scss",
        css: client + "stylesheets"
	};

	return config;
}

module.exports = gulpConfig;
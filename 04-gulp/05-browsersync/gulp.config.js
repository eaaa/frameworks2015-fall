function gulpConfig(){

	var root 	= "./src/";
	var client 	= root + "client/";
	var	server 	= root + "server/app.js";
	
	var config = {
		root: root,
		client: client,
		browserSyncFiles: [client + "**/*", server],
		browserSyncPort: 4000,
		nodeServerPort: 3000,
		server: server
	};

	return config;
}

module.exports = gulpConfig;
const config = require("../../config.json")
const basePath = 'C:/Users/mateu/Documents/Development/corona_project'
const appFactory = function(folderName,env){
	return {
		script: `${basePath}/${folderName}/src/index.js`,
		watch: `${basePath}/${folderName}/*.js`,
		exp_backoff_restart_delay: 100,
		time: true,
		name: folderName,
		env
	}
}
module.exports = {
	apps: [
		appFactory("coronaAPI",{
			PORT: config.coronaAPI.port
		}),
		// appFactory("coronaDB",{
		// 	PORT: config.dbService.port
		// }),
		appFactory("coronaServer",{
			PORT: config.coronaServer.port
		})
    ]
}
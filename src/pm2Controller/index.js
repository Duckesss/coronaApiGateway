const pm2 = require("pm2")

const pm2Controller = {
    connect: new function(){
        let connected = false
        return () => new Promise((resolve,reject) => {
            if(connected) return resolve()
            pm2.connect(function(err){
                if(err) return reject(err)
                connected = true
                return resolve()
            })
        })
    },
    start: async () => {
        await pm2Controller.connect()
        return new Promise((resolve,reject) => {
            pm2.start('./src/pm2Controller/ecosystem.file.config.js',function(err){
                if(err) return reject(err)
                return resolve()
            })
        })
    },
}

module.exports = pm2Controller

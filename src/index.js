(async function(){
        const express = require('express');
        const httpProxy = require('express-http-proxy');
        const app = express();
        const ROUTES = require('../config.json');
        const pm2Controller = require("./pm2Controller")
        await pm2Controller.start()
        Object.values(ROUTES).forEach(({endpoint,host,port}) => {
            const proxy = httpProxy(`${host}:${port}`, {
                limit: '100mb'
            });
            app.use(endpoint, proxy)
        })
        
        const PORT = 80;
        app.listen(PORT, () => {
            console.log(`API Gateway running on port ${PORT}`);
        });
    }
)().catch(console.log)
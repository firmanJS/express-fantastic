import path from 'path';
import Config from '../../system/core/Config';
class UserAgent {
    constructor(req){
        console.log(req)
        if(typeof req !== 'undefined'){
            //this.useragents = require(path.join(__dirname,'../../'+Config.PATH_SOURCE+Config.PATH_CONFIG.configs+'/useragents')).UserAgents;
            this.useragent = req.headers['user-agent'];
            console.log(this.useragents);
        }
    }
}
module.exports = UserAgent;
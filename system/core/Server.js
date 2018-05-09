import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import debug from 'debug';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
class Server {
    constructor(){
        const Config = require(path.join(__dirname,'../../system/core/Config'));
        this.config = Config;
        this.express = Config.EXPRESS;
        this.app = Config.ENGINE;
        this.port = Config.PORT;
        this.NODE_VERSION = Config.NODE_VERSION;
        this.FRAMEWORK = Config.FRAMEWORK;
        this.PATH_PUBLIC = Config.PATH_PUBLIC;
        this.PATH_SOURCE = Config.PATH_SOURCE;
        this.PATH_SYSTEM = Config.PATH_SYSTEM;
        this.PATH_CONFIG = {
            configs: Config.PATH_CONFIG.configs,
            constants: Config.PATH_CONFIG.constants,
            routes: Config.PATH_CONFIG.routes,
            views: Config.PATH_CONFIG.views
        };
        this.constants = require(path.join(__dirname,'../../'+this.PATH_SOURCE + this.PATH_CONFIG.configs + this.PATH_CONFIG.constants));
        this.mode = this.constants.APP_MODE;
        this.views_engine = this.constants.VIEWS_ENGINE;
        this.optionsCors = this.constants.CORS_OPTIONS;
        this.setConfiguration = this.setConfiguration();
        this.createServer = this.createServer();
        this.createServerIO = this.createServerIO();
        this.config.routesRun();
    };
    setConfiguration(){
        const _self = this, sessions = {
            secret: this.constants.SESSION_SECRET,
            resave: false,
            saveUninitialized: true,
            cookie: { secure: this.constants.COOKIE_SECURE, maxAge: this.constants.SESSION_EXPIRED }
        };
        this.app.set('env',this.mode);
        this.app.set('framework',this.FRAMEWORK);
        this.app.set(this.PATH_PUBLIC,path.join(__dirname,'../../'+this.PATH_PUBLIC));
        this.app.set('views', path.join(__dirname,'../../'+this.PATH_SOURCE + this.PATH_CONFIG.views));
        this.app.set('view engine',this.views_engine);
        this.app.set('port',this.port);
        this.app.set('trust proxy', 1);
        this.constants.ENABLE_X_POWERED ? this.app.enable('x-powered-by') : this.app.disable('x-powered-by');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: this.constants.URL_ENCODED}));
        this.app.use(this.express.static(this.app.get(this.PATH_PUBLIC)));
        this.app.use(cors(this.optionsCors));
        this.app.use(helmet({
            xssFilter:{
              setOnOldIE: true
            },
            frameguard:{
              action: 'deny'
            }
        }));
        this.app.use(session(sessions)); // Using express-session middleware. See : https://www.npmjs.com/package/express-session
    };
    createServer(){
        const _self = this,
        server = http.createServer(this.app);
        this.app.listen(this.app.get('port'),function(){
            _self.app.get('env') === 'development' && console.log('Server running. Go to http://localhost:'+_self.app.get('port')+' in your browser.');
        });
        this.app.on('listening', function(){
            let addr = '';
            typeof server.address() === 'string' ? addr = 'pipe '+server.address() : addr = 'port '+server.address().port;
            debug('This app listening on '+addr);
        });
        this.app.on('error',function(error){
            let addr = '';
            typeof server.address() === 'string' ? addr = 'Pipe '+server.address() : addr = 'Port '+server.address().port;
            if(error.syscall !== 'listen'){
                throw error;
            }
            else {
                switch (error.code) {
                    case 'EACCES':
                      console.error(addr + ' requires elevated privileges');
                      process.exit(1);
                      break;
                    case 'EADDRINUSE':
                      console.warn(addr + ' is already in use');
                      process.exit(1);
                      break;
                    default:
                      throw error;
                }
            }
        });
    };
    createServerIO(){
        this.config.socket = this.config.socket(this.createServer);
        this.config.socket.on('connection',function(socket){
            console.log('Socket IO server was connected');
        });
    };
};
module.exports = new Server();
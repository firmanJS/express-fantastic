/* Configuration class */

 /**
  * Importing modules
  */

import express from 'express';
import path from 'path';
import fs from 'fs';
import io from 'socket.io';

/**
 * Class name
 */

class Config {
    constructor(){
        this.EXPRESS = express;
        this.ENGINE = express();
        this.FRAMEWORK = 'Fantastic';
        this.FANTASTIC_VERSION = '1.0.0';
        this.PORT = process.env.PORT || 3001;
        this.NODE_VERSION = process.version;
        this.PATH_PUBLIC = 'public';
        this.PATH_SOURCE = 'src';
        this.PATH_SYSTEM = 'system'; //cannot be changed
        this.PATH_CONFIG = {
            configs: '/config',
            constants: '/constants',
            routes: '/routes',
            views: '/views/'
        };
        this.BASE_URL = require(path.join(__dirname,'../../'+this.PATH_SOURCE+this.PATH_CONFIG.configs+this.PATH_CONFIG.constants)).BASE_URL;
        this.routesRun = this.routesRun.bind(this);
        this.errorNodeJs = this.errorNodeJs.bind(this);
        this.notFound = this.notFound.bind(this);
        this.socket = io;
    };
    routesRun(){
        this.routes();
        this.errorNodeJs();
        this.notFound();
    };
    routes(){
        const self = this,
        route = require(path.join(__dirname,'../../'+this.PATH_SOURCE+this.PATH_CONFIG.configs+this.PATH_CONFIG.routes)).default;
        this.ENGINE.use(route);
    };

    /**
     * Error not found handler
     */

    notFound(){
        this.ENGINE.use(function(req, res, next) {
            res.status = 404;
            const error_data = {
                title: '404 Not Found',
                status: res.status,
                message: 'The page you entered was not found'
            };
            res.render('errors/error_404',error_data);
        });
    };

    /**
     * Errror Nodejs handler
     */

    errorNodeJs(title,status,message,error){
        const _self = this;
        this.ENGINE.use(function(err, req, res, next) {
            console.log(err.stack);
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === _self.mode ? err : {};
            res.status(err.status || 500);
            const error_data = {
                title: typeof title === 'undefined' ? 'Error' : title,
                status: typeof status === 'undefined' ? err.status || 500 : status,
                message: typeof message === 'undefined' ? err.message : message,
                error: typeof error === 'undefined' ? err.stack : error
            };
            process.env === 'development' && res.render('errors/error',error_data);
        });
    };

};
module.exports = new Config();
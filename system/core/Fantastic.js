/* Fantastic class */

/**
 * Importing a modules
 */

import express from 'express';
import path from 'path';
import url from 'url';
import session from 'express-session';
import autoloader from '../../src/config/autoloader';
import { stat } from '../../system/library/FileSystem';
import Config from '../../system/core/Config';
import Database from '../../system/driver/Database';
import UserAgent from '../../system/core/UserAgent';
import Url from '../../system/helper/Url';

/**
 * Class name
 */

 class Fantastic {
     prototypes = {};
    constructor(res){
        
        // Check response exist or not
        if(typeof res === 'undefined') return Config.errorNodeJs('Error NodeJs',null,'Super() must have a response','Subclass of Fantastic are extended should have super() method with response as parameter');
        
        /* Initialize response and autoload */

        this.response = res;
        const autoload = require('../../'+Config.PATH_SYSTEM+'/core/Autoload');
        
        /* Creating prototypes */
        
        const express_methods = new Object({
            app: Config.ENGINE,
            express: Config.EXPRESS,
            router: Config.EXPRESS.Router() ,
        }),
        app_methods = Object.defineProperties({},{
            appUrl: { configurable: true, writable: true, enumerable: true, value: Config.BASE_URL },
            baseUrl: { configurable: true, writable: true, enumerable: true, value: Config.BASE_URL },
            database: { configurable: false, value: this.database.bind(this) },
            publicUrl: { configurable: true, writable: true, enumerable: true, value: Config.BASE_URL+'/'+Config.PATH_PUBLIC },
            send: { configurable: false, writable: true, value: this.send.bind(this) },
            sendApi: { configurable: false, writable: true, value: this.sendApi.bind(this) },
            sendFile: { configurable: false, writable: true, value: this.sendFile.bind(this) },
            sendJson: { configurable: false, writable: true, value: this.sendJson.bind(this) },
            sendStatus: { configurable: false, writable: true, value: this.sendStatus.bind(this) },
            setContentView: { configurable: false, value: this.setContentView.bind(this) },
            sourceUrl: { configurable: true, writable: true, enumerable: true, value: Config.BASE_URL+'/'+Config.PATH_SOURCE },
            systemUrl: { configurable: true, writable: true, enumerable: true, value: Config.BASE_URL+'/'+Config.PATH_SYSTEM },
            viewUrl: { configurable: true, writable: true, enumerable: true, value: Config.BASE_URL+'/'+Config.PATH_SOURCE+Config.PATH_CONFIG.views },
        }),
        
        // Routers
        routers = Object.defineProperties({},{
            redirect: { configurable: false, writable: true, enumerable: true, value: this.redirect.bind(this) },
            notFound: { configurable: false, writable: true, enumerable: true, value: Config.notFound }
        }),
        
        // User agent
        user_agents = Object.defineProperties({},{
            getUserAgent: { configurable: true, value: UserAgent.getUserAgent },
        }),

        // Arrays of modules
        modules = [express_methods, app_methods, {io: Config.socket}, routers, autoload.generateAll(), user_agents],
        
        // Autoloaders
        autoloaders = modules.reduce((a, b) => Object.assign(a, b), {});

        // Freezing loaders
        //Object.freeze(loaders);

        // Set
        Object.setPrototypeOf(Fantastic.prototype,autoloaders);
        this.prototypes = Object.getPrototypeOf(Fantastic.prototype);
    };
    // Load view
    setContentView(view,data,callback){
        typeof view === 'undefined' ? console.error('%s can\'t be undefined','View') : typeof callback !== 'undefined' && typeof callback === 'function' ? this.response.render(view,data,(err,html)=>callback(err,html)) : this.response.render(view,data);
    };

    // Send helper
    send(data){
        typeof data === 'undefined' && console.error('%s can\'t be undefined','Data');
        return this.response.send(data);
    };

    // Send api helper
    sendApi(data){
        typeof data === 'undefined' && console.error('%s can\'t be undefined','Data')
        return this.response.send(JSON.stringify(data));
    };

    // Send file helper
    sendFile(file){
        typeof file === 'undefined' && console.error('%s can\'t be undefined','File')
        return this.response.sendFile(file);
    };

    // Send json helper
    sendJson(data){
        typeof data === 'undefined' && console.error('%s can\'t be undefined','Data');
        return this.response.json(data);
    };

    // Send status
    sendStatus(status=200){
        typeof status === 'undefined' && console.error('%s can\'t be undefined','Status');
        return this.response.sendStatus(status);
    };

    // Status
    status(status=200){
        typeof status === 'undefined' && console.error('%s can\'t be undefined','Status');
        return this.response.status(status);
    };

    // Redirect helper
    redirect(url){
        if(typeof url !== 'string') return console.error('%s must be string','Url');
        return this.response.redirect(url);
    };
    
    // Database
    database(db="db_default"){
        return new Database().createConnection(db);
    };
};

/**
 * Exporting this module
 */
module.exports = Fantastic;
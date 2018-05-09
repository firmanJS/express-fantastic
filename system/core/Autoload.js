/* Autoloader class */

/**
 * Importing a modules
 */

import path from 'path';
import autoloader from '../../src/config/autoloader';
import Config from '../../system/core/Config';
import { statSync } from '../../system/library/FileSystem';

/**
 * Class name
 */

class Autoload {
    constructor(){
        
        Object.seal(autoloader);

        // Models
        this.models = autoloader.models.length > 0 ?
        autoloader.models.map((e,i) =>
           statSync(path.join(__dirname,'../../' + Config.PATH_SOURCE+'/models/'+e.replace(/\.js$/g,'')+'.js')).isFile() && ({ Model: { [e] : require(path.join(__dirname,'../../' + Config.PATH_SOURCE+'/models/') + [e.replace(/\.js$/g,'')]) } })
        ) :
        [];
        
        // Helpers
        this.helpers = (autoloader.helpers.length > 0 ) ?
        autoloader.helpers.map((e,i) =>
            statSync(path.join(__dirname,'../../'+Config.PATH_SOURCE+'/helpers/'+e.replace(/\.js$/g,'')+'.js')).isFile() && ({ Helper: { [e] : require(path.join(__dirname,'../../'+Config.PATH_SOURCE+'/helpers/') + [e.replace(/\.js$/g,'')]) } })
        ) :
        [];

        // Libraries
        this.libraries = (autoloader.libraries.length > 0) ?
        autoloader.libraries.map((e,i) =>
            statSync(path.join(__dirname,'../../'+Config.PATH_SOURCE+'/libs/'+e.replace(/\.js$/g,'')+'.js')).isFile() && ({ Library: { [e] : require(path.join(__dirname,'../../'+Config.PATH_SOURCE+'/libs/') + [e.replace(/\.js$/g,'')]) } })
        ) :
        [];
        
        // Helpers system
        this.helpers_system = (autoloader.system_modules.helpers.length > 0) ?
        autoloader.system_modules.helpers.map((e,i) =>
            statSync(path.join(__dirname,'../helper/'+e.replace(/\.js$/g,'')+'.js')).isFile() && require(path.join(__dirname,'../helper/') + [e.replace(/\.js$/g,'')])
        ) :
        [];
        
        // Libraries system 
        this.libraries_system = (autoloader.system_modules.libraries.length > 0) ?
        autoloader.system_modules.libraries.map((e,i) =>
            statSync(path.join(__dirname,'../library/'+e.replace(/\.js$/g,'')+'.js')).isFile() && require(path.join(__dirname,'../library/') + [e.replace(/\.js$/g,'')])
        ) :
        [];

        this.generateAll = this.generateAll.bind(this);

    };
     
    generateAll(){
        const models = this.models.length > 0 ? this.models.reduce((a, b) => Object.assign(a, b), {}) : null,
        helpers_system = this.helpers_system.length > 0 ? this.helpers_system.reduce((a, b) => Object.assign(a, b), {}) : null,
        libraries_system = this.libraries_system.length > 0 ? this.libraries_system.reduce((a, b) => Object.assign(a, b), {}) : null,
        helpers = this.helpers.length > 0 ? this.helpers.reduce((a, b) => Object.assign(a, b), {}) : null,
        libraries = this.libraries.length > 0 ? this.libraries.reduce((a, b) => Object.assign(a, b), {}) : null;
    return ({...models,...helpers_system, ...libraries_system, ...helpers, ...libraries});
    }

 };

 module.exports = new Autoload();
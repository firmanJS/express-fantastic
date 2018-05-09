/* Database class */

/**
 * Importing a modules
 */
import fs from 'fs';
import path from 'path';
import Config from '../../system/core/Config';

/**
 * Class name
 */

class Database {
    constructor(){
        this.createConnection = this.createConnection.bind(this);
    };

    // Create connection
    createConnection(basedata){

        // Import database in config
        const data = require(path.join(__dirname,'../../'+Config.PATH_SOURCE+'/config/databases'))[basedata];

        // Check database driver
        switch(data.driver){

            // Mysql
            case 'mysql':

            const { driver, hostname, username, port, password, database, charset, ssl, localAddress, insecureAuth, queryFormat, sokcetPath, debug, trace, timezone, timeout, stringify } = data;

            // Import mysql module
            const mysql = require('mysql'),
            
            // Create a connection for mysql
            connection = mysql.createConnection({
                host            : hostname,
                user            : username,
                port            : port,
                password        : password,
                database        : database,
                charset         : charset,
                ssl             : ssl,
                localAddress    : localAddress,
                insecureAuth    : insecureAuth,
                queryFormat     : queryFormat,
                sokcetPath      : sokcetPath,
                debug           : debug,
                trace           : trace,
                timezone        : timezone,
                connectTimeout  : timeout,
                stringifyObjects: stringify
            });

            // Displaying status connect
            connection.connect(function(error){
                if(error) console.error(error,' Can\'t connecting to database');
                else console.log('Database connected');
            });

            return connection;
        }
    };
};

/**
 * Exporting this module
 */

module.exports = Database;
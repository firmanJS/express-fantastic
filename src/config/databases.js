/** Configuration Databases
 * -------------------------------------------------------------------------
*/

/**
 * Mysql
 * See for details : https://github.com/mysqljs/mysql
 */

const Databases = {
    db_default      : {
        driver      : 'mysql',
        hostname    : 'localhost',
        username    : 'root',
        port        : 3306,
        password    : '',
        database    : '',
        charset     : 'utf8_unicode_ci',
        ssl         : false,/*{
            ca      : ''
        },*/
        localAddress: '',
        insecureAuth: false,
        queryFormat : false,
        sokcetPath  : null,
        debug       : false,
        trace       : true,
        timezone    : 'local',
        timeout     : 10000, // Connect timeout
        stringify   : false, // Stringify objects
    },
    db_region      : {
        driver      : 'mysql',
        hostname    : 'localhost',
        username    : 'root',
        port        : 3306,
        password    : '',
        database    : '',
        charset     : 'utf8_unicode_ci',
        ssl         : false,/*{
            ca      : ''
        },*/
        localAddress: '',
        insecureAuth: false,
        queryFormat : false,
        sokcetPath  : null,
        debug       : false,
        trace       : true,
        timezone    : 'local',
        timeout     : 10000, // Connect timeout
        stringify   : false, // Stringify objects
    }
};


/**
 * Exporting databases module
 */

module.exports = Databases;
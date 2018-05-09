/**
 * File system library
 * See https://nodejs.com/fs
 */

import fs from 'fs';
class FileSystem {
    constructor(){
        return fs;
    }
}
module.exports = new FileSystem();
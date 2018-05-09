const base_path = require('path').join(__dirname);
const fs = require('fs');
const {
    isUndefined,
    isFunction,
    isEmail
} = require(base_path+'/Check');
class File {
    constructor(){
        this.isFileExist = this.isFileExist.bind(this);
        this.isDirExist = this.isDirExist.bind(this);
        this.makeDir = this.makeDir.bind(this);
        this.removeDir = this.removeDir.bind(this);
        this.renameFile = this.renameFile.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.upload = this.upload.bind(this);
    };
    isFileExist(path){
        if(isUndefined(path)) return console.error('File destination can\'t be undefined');
        try {
         return fs.statSync(path).isFile();
        }
        catch(e){
            return false;
        }
    };
    isDirExist(path){
        if(isUndefined(path)) return console.error('Path destination can\'t be undefined');
        try {
            return fs.stat(file).isDirectory();
        }
        catch(e){
            return false;
        }
    };
    makeDir(path,mode=parseInt('0755'),callback){
        if(isUndefined(path)) return console.error('Path destination can\'t be undefined');
        fs.mkdir(path, mode, function(error){
            if(error) return isFunction(callback) ? callback(error) : error;
            return isFunction(callback) ? callback(error) : error;
        });
    };
    removeDir(path,mode=parseInt('0755'),callback){
        if(isUndefined(path)) return console.error('Path destination can\'t be undefined');
        fs.rmdir(path, function(error){
            if(error) return isFunction(callback) ? callback(error) : error;
            return isFunction(callback) ? callback(error) : error;
        });
    };
    makeFile(path,content,callback){
        if(isUndefined(path)) return console.error('Path destination can\'t be undefined');
        fs.writeFile(path,content,function(error){
            if(error) return isFunction(callback) ? callback(error) : error;
            return isFunction(callback) ? callback(error) : error;
        })
    };
    openFile(path,flag='r+',callback){
        if(isUndefined(path) || isUndefined(flag)) return console.error('Path or flag can\'t be undefined');
        fs.open(path,flag,function(error,result){
            if(error) return isFunction(callback) ? callback(error) : error;
            return isFunction(callback) ? callback(error) : error;
        });
    };
    renameFile(oldFileName,newFileName,callback){
        if(isUndefined(oldFileName) || isUndefined(newFileName)) return console.error('Old or new filename can\'t be undefined');
        fs.rename(path, function(error){
            if(error) return isFunction(callback) ? callback(error) : error;
            return isFunction(callback) ? callback(error) : error;
        });
    };
    removeFile(path,callback){
        if(isUndefined(path)) return console.error('Path can\'t be undefined');
        fs.unlink(path, function(error){
            if(error) return isFunction(callback) ? callback(error) : error;
            return isFunction(callback) ? callback(error) : error;
        });
    };
    upload(config={},callback){
        const file_info = {
            file_name: config.file.name,
            file_tmp: config.file.path,
            file_size: config.file.size,
            file_type: config.file.type
        };
        let filename = config.filename, directory = config.directory;
        if(typeof filename === 'undefined'){
            return console.error('File name can\'t be undefined');
        }
        else if(directory === ''){
            return console.error('Directory upload must be defined');
        }
        else{
            filename.mv(directory,filename.name,function(error){
                if(error) return isFunction(callback) ? callback(error,'Failed to upload') : error;
                return isFunction(callback) ? callback(null,'Success uploading a files') : error;
            });
        }
    };
};
module.exports = new File;
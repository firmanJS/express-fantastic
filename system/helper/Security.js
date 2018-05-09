const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const randomBytes = require('randombytes');
class Security {
    constructor(){
        this.encodeSpecialChars = this.encodeSpecialChars.bind(this);
        this.decodeSpecialChars = this.decodeSpecialChars.bind(this);
        this.encrypt = this.encrypt.bind(this);
        this.decrypt = this.decrypt.bind(this);
        this.passwordHash = this.passwordHash.bind(this);
        this.passwordVerify = this.passwordVerify.bind(this);
    };
    encodeSpecialChars(html){
        let chars = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            "'": '&#039;',
            '"': '&quot;'
        };
        return html.replace(/[<>&'"]/gm,function(i) { return chars[i];});
    };
    decodeSpecialChars(html){
        let chars = {
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&#039;': "'",
            '&quot;': '"'
        };
        return html.replace(/&lt;|&gt;|&amp;|&#039;|&quot;/gm,function(i) { return chars[i];});
    };
    encrypt(value='') {
        if(isString(value)) return console.error('Value must contains a string');
        let cipher = crypto.createCipheriv('aes256', key, iv);
        let crypted = cipher.update(value, 'utf8', 'hex') + cipher.final('hex');
        return crypted;
    };
    decrypt(value='') {
        if(isString(value)) return console.error('Value must contains a string');
        let decipher = crypto.createDecipheriv('aes256', key, iv)
        let decrypted = decipher.update(value, 'hex', 'utf8') + decipher.final('utf8');
        return decrypted;
    };
    passwordHash(value='',callback){
        bcrypt.genSalt(10,function(error_salt,salt){
            if(error_salt) return isFunction(callback) ? callback(error_salt,null) : error_salt;
            bcrypt.hash(value,salt,function(error_bcrypt,password_hash){
            if(error_bcrypt) return isFunction(callback) ? callback(error_bcrypt,null) : error_bcrypt;
            return isFunction(callback) ? callback(null,password_hash) : password_hash;
            });
        });
    };
    passwordVerify(value='',hash='',callback){
        bcrypt.compare(value,hash,function(error,response){
            if(error) return isFunction(callback) ? callback(error,null) : error;
            return isFunction(callback) ? callback(null,response) : response;
        });
    };
};
module.exports = new Security;
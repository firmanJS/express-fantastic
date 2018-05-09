const base_path = require('path').join(__dirname);
const {
    isUndefined,
    isFunction,
    isEmail
} = require(base_path+'/Check');
class String {
    constructor(){
        this.replace = this.replace.bind(this);
        this.isRegexExist = this.isRegexExist.bind(this);
    };
    replace(haystack='',needle='',replacement=''){
        if(isString(haystack)) return console.error('Haystack must contains a string');
        else if(isString(needle)) return console.error('Needle must contains a string');
        else if(isUndefined(replacement)) return console.error('Replacement can\'t undefined');
        else return haystack.replace(new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/gi, "\\$&"),'gi'),replacement);
    };
    isRegexExist(value=''){
        if(typeof value !== 'string') return console.error('Value must contains a string');
        const pattern = /[.*+?^${}()|[\]\\]/gi;
        return pattern.test(value);
    };
};
module.exports = new String;
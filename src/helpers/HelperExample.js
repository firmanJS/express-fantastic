class HelperExample {
    constructor(){
        this.isClass = this.isClass.bind(this);
        this.isFunction = this.isFunction.bind(this);
        this.isUndefined = this.isUndefined.bind(this);
        this.isObject = this.isObject.bind(this);
        this.isArray = this.isArray.bind(this);
        this.isBool = this.isBool.bind(this);
        this.isNumber = this.isNumber.bind(this);
        this.isString = this.isString.bind(this);
        this.isDate = this.isDate.bind(this);
    };
    isClass(classname){
        return typeof classname === 'function' && /^\s*class\s+/.test(classname.toString());;
    };
    isFunction(func){
        return typeof func === 'function';
    };
    isUndefined(param){
        return typeof param === 'undefined';
    };
    isObject(obj){
        return typeof obj === 'object';
    };
    isArray(array){
        return array.constructor.toString().indexOf('Array') > -1;
    };
    isBool(bool){
        return typeof bool === 'boolean';
    };
    isNumber(number){
        return typeof number === 'number';
    };
    isString(string){
        return typeof string === 'string';
    };
    isDate(date){
        return date.constructor.toString().indexOf('Date') > -1;
    };
};
module.exports = new HelperExample;
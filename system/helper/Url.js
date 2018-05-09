// Url Legacy
import url from 'url';
class Url {
    constructor(){
        this.getUrlAuth = this.getUrlAuth.bind(this);
        this.getUrlHash = this.getUrlHash.bind(this);
        this.getUrlHost = this.getUrlHost.bind(this);
        this.getUrlHostname = this.getUrlHostname.bind(this);
        this.getUrlHref = this.getUrlHref.bind(this);
        this.getUrlPath = this.getUrlPath.bind(this);
        this.getUrlPathname = this.getUrlPathname.bind(this);
        this.getUrlPort = this.getUrlPort.bind(this);
        this.getUrlProtocol = this.getUrlProtocol.bind(this);
        this.getUrlQuery = this.getUrlQuery.bind(this);
        this.getUrlSearch = this.getUrlSearch.bind(this);
        this.getUrlSlash = this.getUrlSlash.bind(this);
        this.urlFormat = this.urlFormat.bind(this);
        this.urlParse = this.urlParse.bind(this);
        this.urlResolve = this.urlResolve.bind(this);
    };
    getUrlAuth(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).auth;
        else return url.parse(req.url,true).auth;
    };
    getUrlHash(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).hash;
        else return url.parse(req.url,true).hash;
    };
    getUrlHost(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).host;
        else return url.parse(req.url,true).host;
    };
    getUrlHostname(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).hostname;
        else return url.parse(req.url,true).hostname;
    };
    getUrlHref(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).href;
        else return url.parse(req.url,true).href;
    };
    getUrlPath(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).path;
        else return url.parse(req.url,true).path;
    };
    getUrlPathname(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).pathname;
        else return url.parse(req.url,true).pathname;
    };
    getUrlPort(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).port;
        else return url.parse(req.url,true).port;
    };
    getUrlQuery(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).query;
        else return url.parse(req.url,true).query;
    };
    getUrlProtocol(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).protocol;
        else return url.parse(req.url,true).protocol;
    };
    getUrlSlash(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).slashes;
        else return url.parse(req.url,true).slashes;
    };
    getUrlSearch(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true).search;
        else return url.parse(req.url,true).search;
    };
    urlFormat(urlObject){
        if(typeof urlObject === 'undefined') return console.error('%s can\'t be undefined','Request');
        if(typeof urlObject !== 'string' || typeof urlObject !== 'object') return console.error('%s must be string or object','UrlObject');
        return url.format(urlObject);
    };
    urlParse(req){
        if(typeof req === 'undefined') return console.error('%s can\'t be undefined','Request');
        else if(typeof req === 'string') return url.parse(url,true);
        else return url.parse(req.url,true);
    };
    urlResolve(from,to){
        if(typeof from === 'undefined' || typeof to === 'undefined') return console.error('%s can\'t be undefined','From or to');
        return url.resolve(from,to);
    };
};
module.exports = new Url;
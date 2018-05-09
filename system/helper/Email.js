const base_path = require('path').join(__dirname);
const {
    isUndefined,
    isFunction,
    isEmail
} = require(base_path+'/Check');
const { 
    HOST_EMAIL,
    SERVICE_EMAIL,
    USER_EMAIL,
    PASS_EMAIL,
    IS_HTML_TEXT,
    IS_SECURE_EMAIL,
    PORT_EMAIL,
    REJECT_UNAUTHORIZED
} = require('../../src/config/constants');
class Email {
    constructor(){
        this.sendEmail = this.sendEmail.bind(this);
    }
    sendEmail(to='',subject='',message='',callback){
        if(isUndefined(to) || isUndefined(subject) || isUndefined(message)) return console.error('Recipient, subject and message cannot be empty');
        const transporter = nodemailer.createTransport({
            host: HOST_EMAIL, // hostname
            service: SERVICE_EMAIL,
            secure: IS_SECURE_EMAIL, // use SSL
            port: PORT_EMAIL,
            auth: {
                user: USER_EMAIL,
                pass: PASS_EMAIL
            },
            tls: {
                rejectUnauthorized: REJECT_UNAUTHORIZED
            }
        });
        const options = {
            from: USER_EMAIL,
            to: to,
            subject: subject
        };
        IS_HTML_TEXT ? Object.assign(options,{text: message, html:message, watchHtml: message}) : Object.assign(options,{text:message});
        transporter.sendMail(options,function(error,info){
            if(error) return isFunction(callback) ? callback(error,null) : error;
            return isFunction(callback) ? callback(null,info.response) : info.response;
        })
    };
};
module.exports = new Email;
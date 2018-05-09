/*  Constants configuration */

/**
 * Base url
 */

const BASE_URL = 'http://localhost:3001';

/**
 * Mode application
 */

const APP_MODE = 'development' || process.env.NODE_ENV;

/**
 * Views engine
 */

const VIEWS_ENGINE = 'ejs';
const URL_ENCODED = true;       // Url encoded option from body parser.
const ENABLE_X_POWERED = false; // Enable and disable x-powered-by option from express. Set it to false (Recomended).

/**
 * Session configuration
 */

const SESSION_NAME = 'your-session-name';
const SESSION_SECRET = 'your-session-secret';
const SESSION_EXPIRED = 60 * 60000;  // 1 minute. Set it to '' with no expired.
const COOKIE_SECURE = false;    // Default false for developement. But set it to true (recomended) when used in production for secure reason over https.

/**
 * Security configuration
 */

const XSS_FILTER = true;        // Prevent cross site scripting attack. Set it to true (Recomended).
const ENABLE_CSRF = true;       // Prevent cross site scripting forgery. Set it to true (Recomended).
const CSRF_NAME = '';
const CSRF_SECRET = '';

/**
 * Email configuration (Sending emmail)
 * - Host email: Your hostname.
 * - Service email: Service for your email account.
 * - User email: Your email address (eg: john@gmail.com).
 * - Pass email: Your email password
 * - Is html text: Plain text or html for body text
 * - Is secure email: Secure for SSL option. Default false for developement but set it to true when used in production.
 * - Port email: Port email.
 * - Reject unauthorized: Reject unauthorized email.
 */

const HOST_EMAIL = BASE_URL;
const SERVICE_EMAIL = 'gmail';
const USER_EMAIL = 'your_email@gmail.com';
const PASS_EMAIL = '';
const IS_HTML_TEXT = false;
const IS_SECURE_EMAIL = false;
const PORT_EMAIL = 465;
const REJECT_UNAUTHORIZED = false;

/**
 * Cors configuration for sending API
 */

const CORS_OPTIONS = {
    origin: '*',                // Whitelist, Example: 'http://www.example1.com, http://www.example12.com, http://www.example123.com' and etc. Set this to '*' for development only !.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200
};
  
/**
 * Exporting constants module
 */

module.exports = {
    BASE_URL,
    APP_MODE,
    VIEWS_ENGINE,
    URL_ENCODED,
    SESSION_NAME,
    SESSION_SECRET,
    SESSION_EXPIRED,
    COOKIE_SECURE,
    CORS_OPTIONS,
    XSS_FILTER,
    ENABLE_CSRF,
    HOST_EMAIL,
    SERVICE_EMAIL,
    USER_EMAIL,
    PASS_EMAIL,
    IS_HTML_TEXT,
    IS_SECURE_EMAIL,
    PORT_EMAIL,
    REJECT_UNAUTHORIZED
};
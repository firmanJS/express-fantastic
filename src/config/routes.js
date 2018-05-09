/** Routes configuration */

import express from 'express';

/**
 * Import your controller classes.
 * Example:
 * import Home from '../controllers/Home'; etc.
 */

import Wellcome from '../controllers/Wellcome';

/** Express router */

const router = express.Router();

/**
 * Here you can call your controller classes after initializing the router methods.
 * Example :
 *  router.get('/',function(req,res){
        new Home(res);          // Without a spesific property function name.
        - OR -
        new Home(res,req);          // Without a spesific property function name and with request parameter.
        - OR -
        new Home(res).wellcome();   // With a spesific property function name.
        - OR -
        new Home(res).wellcome(req);   // With a spesific spesific property function name and request parameter.
    });
 */
router.get('/',function(req,res,next){
    new Wellcome(res).hello();
});

/**
 * Exporting this router module
 */

export default router;
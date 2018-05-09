/* Controller class */

/**
 * Import Fantastic class and other classes
 */

import Fantastic from '../../system/core/Fantastic';

/* Class name */

class Wellcome extends Fantastic {
  constructor(res){
    super(res);                         // Should be declared
    
    /** 
     * Creating a data for a view
     */

    this.data = {
      styleCss: this.baseUrl+'/css/style.css', // Just example for loading css with sending a data to view.
      logo: this.appUrl+'/img/logo.png', // appUrl as the same with baseUrl
      title: 'Wellcome',
      heading: 'ExpressFantastic',
      message: 'Minimalist but fantastic a MVC framework for NodeJs build in express with es6 syntax.',
      info: 'This page located in views/wellcome.ejs called by controllers/Wellcome.js'
    };
    
    // Creating a property function.

    /**
     * Here or in the method, you can call your view with :
     * 
     * this.setContentView('your view', this.data);
     * 
     * Or call your model with :
     * 
     * this.Model.YourModelClass();
     * 
     * Example :
     * 
      const self = this, model = new this.Model.Users();
      return model.readAll(function(err,data){
        return self.sendApi(data); // Sending an Api with this.sendApi() method.
      });

     * Or call a helpers, libraries, databases (But for the best practice call your database in the model class instead) and etc.

     */

  };

  // This property function called by route.

  hello(){

    // Rendering a view with this.setContentView() like res.render() in express;
    this.setContentView('wellcome',this.data);

  };

};

/**
 * Exporting this controller module
 */

module.exports = Wellcome;
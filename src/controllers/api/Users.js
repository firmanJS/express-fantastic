import Fantastic from '../../../system/core/Fantastic';
class Users extends Fantastic {
  constructor(){
    super();
    /*this.model = new this.Model.Users();
    this.readAll = this.readAll.bind(this);
    this.readById = this.readById.bind(this);
    this.readByEmail = this.readByEmail.bind(this);*/
  };
  readAll(){
    const self = this;
    /*return this.model.findAll({},function(err,data){
        return self.sendApi(data);
    });*/
  };
  readById(req){
    const self = this, id = req.params.id;
    /*return this.model.findById({id:id},function(err,data){
        return self.sendApi(data);
    });*/
  };
  readByEmail(email=''){
    const self = this;
    /*return this.model.findByEmail({email:email},function(err,data){
        return self.sendApi(data);
    });*/
  };
};
module.exports = Users;
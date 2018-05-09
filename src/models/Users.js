import Fantastic from '../../system/core/Fantastic';
class Users extends Fantastic {
    constructor(res){
        super(res);
        this.connection = this.database();
        this.mysql = this.connection;
        this.data = {
            table: 'users',
            primary: 'id_user',
            data1: 'username',
            data2: 'email',
            data3: 'phone',
            data4: 'village',
            data5: 'district',
            data6: 'province',
            data7: 'country',
            data8: 'zip_code',
            data9: 'password',
            data10: 'photo_profile',
            data11: 'store',
            data12: 'card_credit',
            data13: 'stars',
            data14: 'active',
            data15: 'blocked',
            data16: 'join_at',
        };
        this.outers = Object.values(this.data).filter((e,i,a) => e !== this.data.table && e !== this.data.data9).toString();
    };
    findAll(param,callback) {
        const self = this, { offset, limit } = param;
        let limited;
        typeof offset !== 'undefined' && typeof limit !== 'undefined' ? limited = ' LIMIT '+this.mysql.escape(offset)+','+this.mysql.escape(limit) : limited = '';
        this.mysql.query(" SELECT "+this.outers+" FROM "+this.data.table+" ORDER BY "+this.data.primary+" DESC "+limited,function(error,result,fields){
            if(error) return self.isFunction(callback) ? callback(error,null) : error;
            return self.isFunction(callback) ? callback(null,result) : result;
        });
    };
    findById(param,callback) {
        const self = this, { id } = param;
        let limited;
        this.mysql.query(" SELECT "+this.outers+" FROM "+this.data.table+" WHERE "+this.data.primary+" = "+this.mysql.escape(id)+" ORDER BY "+this.data.primary+" DESC ",function(error,result,fields){
            if(error) return self.isFunction(callback) ? callback(error,null) : error;
            return self.isFunction(callback) ? callback(null,result) : result;
        });
    };
    findByEmail(param,callback) {
        const self = this, { email } = param;
        let limited;
        this.mysql.query(" SELECT "+this.outers+" FROM "+this.data.table+" WHERE "+this.data.data2+" = "+this.mysql.escape(email)+" ORDER BY "+this.data.primary+" DESC ",function(error,result,fields){
            if(error) return self.isFunction(callback) ? callback(error,null) : error;
            return self.isFunction(callback) ? callback(null,result) : result;
        });
    };
};
module.exports = Users;
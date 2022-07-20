const { Service } = require('feathers-sequelize');

exports.User = class User extends Service {
    constructor (options) {
        this.options = options || {};
      }
    
};



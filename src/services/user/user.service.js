// Initializes the `user` service on path `/user`
// const { User } = require('./user.class');
const createModel = require('../../models/user.model');
const hooks = require('./user.hooks');
const service = require('feathers-sequelize');


module.exports = function (app) {
  const options = {
    Model: createModel(app) 
  };

  // Initialize our service with any options it requires
  // app.use('/user', new User(options, app));
  app.use('/user', service(options));

  // Get our initialized service so that we can register hooks
  const TEst = app.service('user');

  TEst.hooks(hooks);
};


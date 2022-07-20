const user = require('./user/user.service.js');
const testService = require('./test_service/test_service.service.js');
const graphql = require('./graphql/graphql.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // app.configure(testService);
  app.configure(user);
  app.configure(graphql);
};

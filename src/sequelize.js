const Sequelize = require('sequelize');

module.exports = function (app) {
  // const connectionString = app.get('mysql');
  const dbusername = app.get('dbusername');
  const dbpassword = app.get('dbpassword');
  const dbhost = app.get('dbhost');
  const dbName = app.get('dbName');
  const sequelize = new Sequelize(dbName,dbusername,dbpassword, {
    host:dbhost,
    dialect: 'mysql',
    logging: false,
    define: {
      freezeTableName: true
    }
  });
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    app.set('sequelizeSync', sequelize.sync());

    return result;
  };
};

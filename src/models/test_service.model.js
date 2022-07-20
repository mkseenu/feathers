// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const testService = sequelizeClient.define('test_service', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: true
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mobile: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: true
    }
    
  }, {
    timestamps: false
}, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  testService.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return testService;
};

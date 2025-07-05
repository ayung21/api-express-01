var DataTypes = require("sequelize").DataTypes;
var _log = require("./log");
var _staff = require("./staff");
var _users = require("./users");

function initModels(sequelize) {
  var log = _log(sequelize, DataTypes);
  var staff = _staff(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    log,
    staff,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

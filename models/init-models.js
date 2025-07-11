var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _employees = require("./employees");
var _employees_salary = require("./employees_salary");
var _log = require("./log");
var _users = require("./users");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var employees_salary = _employees_salary(sequelize, DataTypes);
  var log = _log(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    SequelizeMeta,
    employees,
    employees_salary,
    log,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

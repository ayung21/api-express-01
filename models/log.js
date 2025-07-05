const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_login: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "log_unique",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

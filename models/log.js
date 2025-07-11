const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_login: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    device_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_login: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_login: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    description_log: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "log_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

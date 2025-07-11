const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees_salary', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    basic_salary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    allowance_transport: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Allowance_meal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    allowance_position: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    allowance_other: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    deduction_bpjs_kes: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    deduction_bpjs_tk: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    deduction_tax_pph21: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    deduction_other: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_earning: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_deduction: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    net_salary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payment_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bank_transfer_status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at' // <-- map to DB column
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  }, {
    sequelize,
    tableName: 'employees_salary',
    schema: 'public',
    timestamps: true,
    createdAt: 'created_at', // <-- tell Sequelize to use created_at
    updatedAt: false,        // <-- or set to 'updated_at' if you have it
    indexes: [
      {
        name: "employees_salary_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

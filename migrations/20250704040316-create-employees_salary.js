'use_strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees_salary', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      employee_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      basic_salary: {
        type: Sequelize.STRING,
        allowNull: false
      },
      allowance_transport: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Allowance_meal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      allowance_position: {
        type: Sequelize.STRING,
        allowNull: false
      },
      allowance_other: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deduction_bpjs_kes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deduction_bpjs_tk: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deduction_tax_pph21: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deduction_other: {
        type: Sequelize.STRING,
        allowNull: false
      },
      total_earning: {
        type: Sequelize.STRING,
        allowNull: false
      },
      total_deduction: {
        type: Sequelize.STRING,
        allowNull: false
      },
      net_salary: {
        type: Sequelize.STRING,
        allowNull: false
      },
      payment_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bank_transfer_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employees_salary');
  }
};
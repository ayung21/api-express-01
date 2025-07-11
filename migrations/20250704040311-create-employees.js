'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nik_karyawan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nik_ktp: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      npwp: {
        type: Sequelize.STRING,
        allowNull: true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mobile_phone: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dob: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status_pernikahan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      agama: {
        type: Sequelize.STRING,
        allowNull: true
      },
      kewarganegaraan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tanggal_masuk: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_DATE')
      },
      norekening_karyawan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      namabank_karyawan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status_karyawan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      departemen: {
        type: Sequelize.STRING,
        allowNull: true
      },
      position: {
        type: Sequelize.STRING,
        allowNull: true
      },
      position_grade: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lokasi_penempatan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emergency_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emergency_relation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emergency_phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emergency_address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status_staff: {
        type: Sequelize.STRING,
        allowNull: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_by: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employees');
  }
};
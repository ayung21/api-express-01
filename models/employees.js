const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nik_karyawan: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nik_ktp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    npwp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile_phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status_pernikahan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kewarganegaraan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tanggal_masuk: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    norekening_karyawan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    namabank_karyawan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status_karyawan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    departemen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    position_grade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lokasi_penempatan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_relation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status_staff: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at' // <-- map to DB column
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'employees',
    schema: 'public',
    timestamps: true,
    createdAt: 'created_at', // <-- tell Sequelize to use created_at
    updatedAt: false,        // <-- or set to 'updated_at' if you have it
    indexes: [
      {
        name: "employees_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

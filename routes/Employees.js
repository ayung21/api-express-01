const express = require('express');
const router = express.Router();
const sequelize = require('../config/database'); // adjust path if needed
const initModels = require('../models/init-models');
const models = initModels(sequelize);
require('dotenv').config();
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/auth');

router.get('/employees/list', authenticateToken, async (req, res) => {
    try {
        const employees = await models.employees.findAll({

        });
        
        return res.json({
            status: 200,
            data: employees
        });

    } catch (error) {
        return res.json({
            status: 500,
            message: 'Error fetching users',
            error: error.message
        });
    }

});

router.get('/employeessalary/list', authenticateToken, async (req, res) => {
    try {
        const employees_salary = await models.employees_salary.findAll({

        });
        
        return res.json({
            status: 200,
            data: employees_salary
        });

    } catch (error) {
        return res.json({
            status: 500,
            message: 'Error fetching users',
            error: error.message
        });
    }

});

router.post('/employees/store', authenticateToken, async (req, res) => {
    const {nik_karyawan, nik_ktp, npwp, first_name, last_name, email, mobile_phone, address, dob, status_pernikahan, agama, kewarganegaraan, tanggal_masuk, norekening_karyawan, namabank_karyawan, status_karyawan, departemen, position, position_grade, lokasi_penempatan, company_name, emergency_name, emergency_relation, emergency_phone, emergency_address} = req.body;
    try {
        const newStaff = await models.staff.create({
            nik_karyawan : nik_karyawan,
            nik_ktp : nik_ktp,
            npwp : npwp,
            first_name : first_namesantos,
            last_name : last_name,
            email : email,
            mobile_phone : mobile_phone,
            address : address,
            dob : dob,
            status_pernikahan : status_pernikahan,
            agama : agama,
            kewarganegaraan : kewarganegaraan,
            tanggal_masuk : tanggal_masuk,
            norekening_karyawan : norekening_karyawan,
            namabank_karyawan : namabank_karyawan,
            status_karyawan : status_karyawan,
            departemen : departemen,
            position : position,
            position_grade : position_grade,
            lokasi_penempatan : lokasi_penempatan,
            company_name : company_name,
            emergency_name : emergency_name,
            emergency_relation : emergency_relation,
            emergency_phone : emergency_phone,
            emergency_address : emergency_address,
            status_staff : 'aktif',
            user_id : 1,
            created_at : new Date(),
            updated_at : new Date(),
            // updated_by : new Date()
        });
        
        return res.json({
            status: 200,
            message: "success create staff"
        });

    } catch (error) {
        return res.json({
            status: 500,
            message: 'Error fetching users',
            error: error.message
        });
    }

});

router.post('/employeessalary/store', authenticateToken, async (req, res) => {
    const {employee_id,basic_salary,allowance_transport,Allowance_meal,allowance_position,allowance_other,deduction_bpjs_kes,deduction_bpjs_tk,deduction_tax_pph21,deduction_other,total_earning,total_deduction,net_salary,payment_date,bank_transfer_status,description} = req.body;
    try {
        const newStaff = await models.staff.create({
            employee_id : employee_id,
            basic_salary : basic_salary,
            allowance_transport : allowance_transport,
            Allowance_meal : Allowance_meal,
            allowance_position : allowance_position,
            allowance_other : allowance_other,
            deduction_bpjs_kes : deduction_bpjs_kes,
            deduction_bpjs_tk : deduction_bpjs_tk,
            deduction_tax_pph21 : deduction_tax_pph21,
            deduction_other : deduction_other,
            total_earning : total_earning,
            total_deduction : total_deduction,
            net_salary : net_salary,
            payment_date : payment_date,
            bank_transfer_status : bank_transfer_status,
            description : description,
            created_by : 1,
            created_at : new Date(),
            updated_by : 1,
            updated_at : new Date()
            // updated_by : new Date()
        });
        
        return res.json({
            status: 200,
            message: "success create staff"
        });

    } catch (error) {
        return res.json({
            status: 500,
            message: 'Error fetching users',
            error: error.message
        });
    }

});

module.exports = router;
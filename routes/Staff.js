const express = require('express');
const router = express.Router();
const sequelize = require('../config/database'); // adjust path if needed
const initModels = require('../models/init-models');
const models = initModels(sequelize);
require('dotenv').config();
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/auth');

router.get('/staff/list', authenticateToken, async (req, res) => {
    try {
        const staff = await models.staff.findAll({

        });
        
        return res.json({
            status: 200,
            data: staff
        });

    } catch (error) {
        return res.json({
            status: 500,
            message: 'Error fetching users',
            error: error.message
        });
    }

});

router.post('/staff/store', authenticateToken, async (req, res) => {
    const {name} = req.body;
    try {
        const newStaff = await models.staff.create({
            name: name,
            created_at: new Date(),
            updated_at: new Date()
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
const express = require('express');
const router = express.Router();
const sequelize = require('../config/database'); // adjust path if needed
const initModels = require('../models/init-models');
const models = initModels(sequelize);
require('dotenv').config();
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/auth');

router.post('/auth/register', async (req, res) => {
    try {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const { username , password } = req.body;

        const checkUser = await models.users.findOne({
            where: {
                username: username
            }
        });

        if(checkUser){
            return res.json({
                status: 500,
                message: "user exist"
            });
        }

        const hash = await bcrypt.hash(password, saltRounds);

        const newUser = await models.users.create({
            username: username,
            password: hash,
            created_at: new Date()
        });
        
        return res.json({
            status: 200,
            message: 'success register'
        });

    } catch (error) {
        return res.json({
            status: 500,
            message: 'Error fetching users',
            error: error.message
        });
    }

});

router.post('/auth/login', async (req, res) => {
    try {
        const bcrypt = require('bcrypt');
        const { username, password } = req.body;

        if (!username || !password) {
            return res.json({
                status: 400,
                message: 'Username and password are required'
            });
        }

        const member = await models.users.findOne({
            where: {
                username: username
            }
        });

        if( !member ) {
            return res.json({
                status: 404,
                message: 'User not found'
            });
        }

        const compare = await bcrypt.compare(password, member.password)

        if(!compare) {
            return res.json({
                status: 401,
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign(
            { id: member.id, username: member.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        const logLogin = await models.log.create({
            user_id: member.id,
            date_login: new Date(),
            ip_login: req.headers['x-forwarded-for'] || req.ip, // Get the IP address
            device_info: req.headers['user-agent'], // Get the device info from user agent
            status_login: 'success',
            description_log: 'User logged in successfully'
        });

        return res.json({
            status: 200,
            token: token
        });

    } catch (error) {
        return res.json({
            status: 500,
            message: 'Error fetching users',
            error: error.message
        });
    }
});

router.get('/auth/verify', authenticateToken, (req, res) => {
    return res.json({
        status: 200,
        data: req.user
    });
});

module.exports = router;


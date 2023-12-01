const Login = require('../model/loginModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenCreation = (id, user) => {
    return jwt.sign({ id, user }, process.env.SEC, {
        expiresIn: 100000
    });
};

const createUser = async (req, res) => {
    try {
        await Login.create(req.body);
        res.status(201).json({
            status: 'success',
            message: 'user created'
        });
    } catch (error) {
        console.error('Error in creating user:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
};

const loginUser = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(404).json({
                status: 'failed',
                message: 'please enter all the fields'
            });
        }

        const email = req.body.email;
        let user = await Login.findOne({ email });

        if (!user) {
            return res.status(404).json({
                status: 'failed',
                message: 'User not found',
            });
        }

        const isPasswordValid = await user.checkPassword(req.body.password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                status: 'failed',
                message: 'Invalid password',
            });
        }

        let name = user.name;
        let userId = user._id;
        let role = user.role;

        const token = tokenCreation(user._id, name);

        res.status(200).json({
            status: 'success',
            name,
            role,
            token,
            userId,
            message: 'User Logged in'
        });
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    createUser,
    loginUser
};

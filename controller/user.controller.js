const APIError = require('../helpers/APIError');
const httpStatus = require('http-status');
const Sequelize = require('sequelize');
// const db = require('../config/db');
const User = require('../models/User');

exports.addUser = (req, res, next) => {

    // User.create({
    //     email: req.body.email,
    //     password: req.body.password,
    // })
    //     .then(result => {
    //         console.log(result);
    //         return res.status(200).json({
    //             message: result
    //         });
    //
    //     })
    //     .catch(e => {
    //         next(e);
    //     });

};

exports.getAllUser = (req, res, next) => {
    return res.status(200).json({
        message: 'getall user'
    });
};
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validate = require('express-validation');
const userController = require('../controller/user.controller');

const paramsValidation = {
    getAllUser: {
        body: {
            email:  Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().required(),
        },
        // params: {
        //     userId: Joi.string().hex().required()
        // },
    }
};

router.route('/login')
    .post(validate(paramsValidation.getAllUser), userController.addUser);
// router.route('/')
//     .post(validate(paramsValidation.getAllUser), userController.getAllUser);


module.exports = router;


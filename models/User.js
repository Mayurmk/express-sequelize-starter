
const Sequelize = require('sequelize');
const httpStatus = require('http-status');
const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');
const db = require('../../config/db');
const APIError = require('../../helpers/APIError');

/**
 * User Schema
 */
const UserSchema = {
    id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
    },
};

const User = db.sequelize.define('user', UserSchema);
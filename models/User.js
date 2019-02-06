
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');
const db = require('../config/db');
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
    // firstName: {
    //     type: Sequelize.STRING,
    // },
    // lastName: {
    //     type: Sequelize.STRING,
    // },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.DATE,
    },
};

const User = db.sequelize.define('user', UserSchema);

/**
 * Generates password for the plain password.
 * @param password
 * @returns {string} - hashed password
 */
User.prototype.generatePassword = function generatePassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 * Checks if the password matches the hash of password
 * @param password
 * @returns {boolean} - Returns true if password matches.
 */
User.prototype.validPassword = function validPassword(password) {
    return bcrypt.compareSync(password, this.password);
};

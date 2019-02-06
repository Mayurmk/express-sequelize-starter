const Sequelize = require('sequelize');
const config = require('./index');

const { db: dbDetails} = config;
const { env } = config;

const sequelize = new Sequelize(dbDetails[env].database, dbDetails[env].username, dbDetails[env].password, {
    host: dbDetails[env].host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });

module.exports = { sequelize };
module.exports = {
    development: {
        development: {
            username: 'root',
            password: 'root',
            database: 'demoDB',
            host: 'localhost',
            port: 3306,
            dialect: 'mysql',
        },
        production: {
            username: 'root',
            password: null,
            database: null,
            host: '127.0.0.1',
            port: 3306,
            dialect: 'mysql',
        },
        test: {
            username: 'root',
            password: null,
            database: null,
            host: '127.0.0.1',
            port: 3306,
            dialect: 'mysql',
        },
    }
};
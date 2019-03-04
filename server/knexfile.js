if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
  }

module.exports = {
    production: {
        client: 'pg',
        connection: {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DB,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
        pool: {
            min: 2,
            max: 10
        }
    },
    development: {
        client: 'pg',
        connection: {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DB,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
        pool: {
            min: 2,
            max: 10
        }
    } 
};

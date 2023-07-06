var mysql = require('mysql');

module.exports = {
    HOST :"babar.db.elephantsql.com",
    DB:"fqwatydn",
    USER:"fqwatydn",
    PASSWORD:"NEMg8dzCTHWP5jUW7U3LBuAMofZdslOH",
    dialect:"postgres",

    pool:{
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};


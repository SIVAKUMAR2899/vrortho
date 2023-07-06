var mysql = require('mysql');

module.exports = {
    HOST :"recinfotech.com",
    DB:"recinfotceh_vrortho",
    USER:"recinfotceh_vrortho",
    PASSWORD:"recinfotech$ortho",
    dialect:"mysql",

    pool:{
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};


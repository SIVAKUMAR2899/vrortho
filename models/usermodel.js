const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
        const User = sequelize.define('vrurls', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            url: {
                type: DataTypes.TEXT,
            }
        },
            {
                timestamps: false
            }
        );
    
        return User
    
    };
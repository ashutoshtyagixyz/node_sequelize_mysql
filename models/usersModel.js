const Sequelize = require('sequelize');

const sequelize = require("../config/database");

const User = sequelize.define('users',{
    id  :   {
        type            :   Sequelize.INTEGER,
        autoIncrement   :   true,
        allowNull       :   false,
        primaryKey      :   true 
    },
    email : {
        type : Sequelize.STRING,
        validate : {
            isEmail: true,
        }
    },
    username : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    }
});

module.exports = User;
User.sync();


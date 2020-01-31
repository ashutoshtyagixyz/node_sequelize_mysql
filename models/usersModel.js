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
            isEmail: {
                msg : "Please enter valid email address."
            }

        }
    },
    username : {
        type : Sequelize.STRING,
        allowNull : false,
        validate: {
            notNull: { 
                msg: "username is required" 
            },
        }
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false,

        validate: {
            notNull: { 
                msg: "password is required" 
            },
            len: {
                args: [6,10],
                msg : "Password must be of min length 6."
            }
        }
    }
});

module.exports = User;
User.sync();


const Sequelize = require('sequelize');

const sequelize = require("../config/database");

const AllDataTypeModel = sequelize.define('all_data_type',{
    id  :   {
        type            :   Sequelize.INTEGER,
        autoIncrement   :   true,
        allowNull       :   false,
        primaryKey      :   true 
    },
    string : {
        type : Sequelize.STRING,
        allowNull : false
    },
    string_with_size : {
        type : Sequelize.STRING(123) ,
        allowNull : false
    },
    text : {
        type : Sequelize.TEXT
    },
    float : {
        type : Sequelize.FLOAT
    },
    float_with_memory : {
        type : Sequelize.FLOAT(11, 10)
    },
    double : {
        type  : Sequelize.DOUBLE
    },
    double_with_memory : {
        type  : Sequelize.DOUBLE(11, 10)
    },
    date  :{
        type : Sequelize.DATE
    },
    boolean : {
        type : Sequelize.BOOLEAN
    },
    json : {
        type : Sequelize.JSON
    },
 




});

module.exports = AllDataTypeModel;
AllDataTypeModel.sync( {force:true} );


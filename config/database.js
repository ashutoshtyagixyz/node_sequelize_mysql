const Sequelize = require('sequelize')

const sequelize = new Sequelize('learning_n','dev','123456',
{
    dialect : 'mysql',
    host    :'localhost'
});

module.exports = sequelize;
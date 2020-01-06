const Sequelize = require("sequelize");

const sequelize = new Sequelize("learning_n","dev","123456",
					{
						host : '127.0.0.1',
						dialect : "mysql" 	
					});

module.exports = sequelize;
global.sequelize = sequelize
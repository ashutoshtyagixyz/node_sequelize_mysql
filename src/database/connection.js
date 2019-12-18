const Sequelize = require("sequalize");

const sequelize = new Sequelize("learning_n","root","123456",
					{
						host : '127.0.0.1',
						dialect : "mysql",
						operatorsAliases : false 	
					});

module.exports = sequelize;
global.sequelize = sequelize
const Sequelize = require("sequelize");

module.exports = sequelize.define("users",
	{
		id: {
			type : Sequelize.INTEGER(11),
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		email: Sequelize.STRING(300),
		password: Sequelize.STRING(300),
	});
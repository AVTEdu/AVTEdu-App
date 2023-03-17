const { ConnectDB } = require("../config/mysql.config");

const sequelize = ConnectDB().getInstance();


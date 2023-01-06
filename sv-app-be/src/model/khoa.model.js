const {Sequelize, DataTypes} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");

const sequelize = ConnectDB();

const Khoa = sequelize.define("khoa",{
    ma_khoa:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ten_khoa:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    mo_ta:{
        type: DataTypes.STRING,
    }, 
  
},  {timestamps: false,freezeTableName: true})
Khoa.sync({ alter: true });
module.exports = Khoa;
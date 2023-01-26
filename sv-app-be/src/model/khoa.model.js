const {Sequelize, DataTypes,Model} = require("sequelize");
const { ConnectDB } = require("../config/Connect_MySQL");
const Admin = require("./admin.model");

const sequelize = ConnectDB().getInstance();
/*
*Model Khoa
*/

class Khoa extends Model {};

Khoa.init({
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
  
},{
    sequelize,
    modelName:'khoa',
    timestamps:false,
    freezeTableName:true
  });
module.exports = Khoa;
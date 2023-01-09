const {Sequelize, DataTypes,Model} = require("sequelize");
const Connect_MySQL = require("../until/Connect_MySQL");


const sequelize = Connect_MySQL.ConnectDB();

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
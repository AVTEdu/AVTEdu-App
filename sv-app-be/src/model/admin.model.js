const {Sequelize, DataTypes, Model} = require("sequelize");
const Connect_MySQL = require("../until/Connect_MySQL");
const Khoa = require("./khoa.model");

const sequelize =  Connect_MySQL.ConnectDB();
/*
*Model Admin
*/
class Admin extends Model {};

Admin.init({
    ma_admin:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    ma_khoa:{
        type:DataTypes.INTEGER,
        references:{
            model:Khoa,
            key:'ma_khoa',
        }
    }
},{
    sequelize,
    modelName:'admin',
    timestamps:false,
    freezeTableName:true
  });
Admin.hasMany(Khoa);
module.exports = Admin;
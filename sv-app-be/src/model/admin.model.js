const {Sequelize, DataTypes, Model} = require("sequelize");
const { ConnectDB } = require("../config/Connect_MySQL");
const Khoa = require("./khoa.model");

const sequelize = ConnectDB().getInstance();
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
    //Khoá ngoại của Khoa tới Admin
    ma_khoa:{
        type: DataTypes.INTEGER,
        references: {
            model: Khoa,
            key: 'ma_khoa'
            }
        }
},{
    sequelize,
    modelName:'admin',
    timestamps:false,
    freezeTableName:true
  });
module.exports = Admin;
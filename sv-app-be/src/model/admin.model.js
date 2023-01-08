const {Sequelize, DataTypes, Model} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");
const Khoa = require("./khoa.model");

const sequelize = ConnectDB();
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
    }
}, {timestamps: false,freezeTableName: true})
Admin.hasMany(Khoa,{
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    foreignKey:{
        name:'ma_khoa',
        type:DataTypes.INTEGER,
        allowNull:false
    }
});
Admin.sync({ alter: true });
module.exports = Admin;
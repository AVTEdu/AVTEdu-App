const {Sequelize, DataTypes} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");
const Khoa = require("./khoa.model");

const sequelize = ConnectDB();

const Admin = sequelize.define("admin",{
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
        type: DataTypes.INTEGER,
        references: 'khoa', // <<< Note, its table's name, not object name
        referencesKey: 'ma_khoa' // <<< Note, its a column name
    },
    timestamps: false,
}, {timestamps: false,freezeTableName: true})
Admin.hasMany(Khoa);
Admin.sync({ alter: true });
module.exports = Admin;
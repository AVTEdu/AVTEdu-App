const {Sequelize, DataTypes, Model} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");

const sequelize = ConnectDB();

class DanToc extends Model {};

DanToc.init({
    ma_dan_toc:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ten_dan_toc:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    mo_ta:{
        type: DataTypes.STRING,
    }
},{timestamps: false,freezeTableName: true})
DanToc.sync({ alter: true });
module.exports= DanToc;
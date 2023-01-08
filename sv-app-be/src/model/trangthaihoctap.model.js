const {Sequelize, DataTypes, Model} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");

const sequelize = ConnectDB();

class TrangThaiHocTap extends Model{};

TrangThaiHocTap.init({
    ma_trang_thai_hoc_tap:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ten_trang_thai_hoc_tap:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    mo_ta:{
        type: DataTypes.STRING,
    },
},{timestamps: false,freezeTableName: true})
TrangThaiHocTap.sync({ alter: true });
module.exports= TrangThaiHocTap;
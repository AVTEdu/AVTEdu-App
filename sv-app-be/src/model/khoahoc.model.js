const {Sequelize, DataTypes, Model} = require("sequelize");
const Connect_MySQL = require("../until/Connect_MySQL");

const sequelize = Connect_MySQL.ConnectDB();

class KhoaHoc extends Model {};

KhoaHoc.init({
    ma_khoa_hoc:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ten_khoa_hoc:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    thoi_gian_bat_dau:{
        type: DataTypes.DATEONLY,
        allowNull:false
    },
    thoi_gian_ket_thuc:{
        type: DataTypes.DATEONLY,
        allowNull:false
    },
    mo_ta:{
        type: DataTypes.STRING,
    },
},{
    sequelize,
    modelName:'khoa_hoc',
    timestamps:false,
    freezeTableName:true
  });
KhoaHoc.sync({ alter: true });
module.exports= KhoaHoc;
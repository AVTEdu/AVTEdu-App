const {Sequelize, DataTypes, Model} = require("sequelize");
const Connect_MySQL = require("../until/Connect_MySQL");

const sequelize = Connect_MySQL.ConnectDB();

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
},{
    sequelize,
    modelName:'trang_thai_hoc_tap',
    timestamps:false,
    freezeTableName:true
  });
module.exports= TrangThaiHocTap;
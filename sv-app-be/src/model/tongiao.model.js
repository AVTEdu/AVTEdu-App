const {Sequelize, DataTypes, Model} = require("sequelize");
const Connect_MySQL = require("../until/Connect_MySQL");

const sequelize = Connect_MySQL.ConnectDB();

class TonGiao extends Model {};

TonGiao.init({
    ma_ton_giao:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ten_ton_giao:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    mo_ta:{
        type: DataTypes.STRING,
    },
},{
    sequelize,
    modelName:'ton_giao',
    timestamps:false,
    freezeTableName:true
  });
TonGiao.sync({ alter: true });
module.exports= TonGiao;


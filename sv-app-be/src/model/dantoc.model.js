const {Sequelize, DataTypes, Model} = require("sequelize");
const Connect_MySQL = require("../until/Connect_MySQL");

const sequelize = Connect_MySQL.ConnectDB();

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
},{
    sequelize,
    modelName:'dantoc',
    timestamps:false,
    freezeTableName:true
  });
module.exports= DanToc;
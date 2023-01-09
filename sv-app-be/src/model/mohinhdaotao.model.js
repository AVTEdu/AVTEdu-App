const {Sequelize, DataTypes, Model} = require("sequelize");
const Connect_MySQL = require("../until/Connect_MySQL");

const sequelize = Connect_MySQL.ConnectDB();

class MoHinhDaoTao extends Model{};

MoHinhDaoTao.init({
    ma_mo_hinh_dao_tao:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ten_mo_hinh_dao_tao:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    mo_ta:{
        type: DataTypes.STRING,
    },
    timestamps: false,
},{
    sequelize,
    modelName:'mo_hinh_dao_tao',
    timestamps:false,
    freezeTableName:true
  });
MoHinhDaoTao.sync({ alter: true });
module.exports= MoHinhDaoTao;
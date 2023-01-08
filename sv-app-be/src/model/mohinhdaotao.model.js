const {Sequelize, DataTypes, Model} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");

const sequelize = ConnectDB();

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
},{timestamps: false,freezeTableName: true})
MoHinhDaoTao.sync({ alter: true });
module.exports= MoHinhDaoTao;
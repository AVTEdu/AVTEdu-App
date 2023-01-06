const {Sequelize, DataTypes} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");

const sequelize = ConnectDB();

const MoHinhDaoTao = sequelize.define("mo_hinh_dao_tao",{
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
})
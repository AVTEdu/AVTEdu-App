const {Sequelize, DataTypes} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");

const sequelize = ConnectDB();

const KhoaHoc = sequelize.define("khoa_hoc",{
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
    timestamps: false,
})
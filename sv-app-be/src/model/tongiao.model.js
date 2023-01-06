const {Sequelize, DataTypes} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");

const sequelize = ConnectDB();

const TonGiao = sequelize.define("ton_giao",{
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
    timestamps: false,
})


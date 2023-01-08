const {Sequelize, DataTypes, Model} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");

const sequelize = ConnectDB();
/*
*Model Admin
*/
class BacDaoTao extends Model {};

BacDaoTao.init({
    ma_bac_dao_tao:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ten_bac_dao_tao:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    mo_ta:{
        type: DataTypes.STRING,
    }
},{timestamps: false,freezeTableName: true})
BacDaoTao.sync({ alter: true });
module.exports= BacDaoTao;
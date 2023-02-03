const {Sequelize, DataTypes, Model} = require("sequelize");
const { ConnectDB } = require("../config/mysql.config");

const sequelize = ConnectDB().getInstance();

class ThoiKhoaBieu extends Model {}

ThoiKhoaBieu.init({
    ma_thoi_khoa_bieu:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    loai_hoc_phan:{
        
    }

},{
    sequelize,
    modelName:'thoi_khoa_bieu',
    freezeTableName:true,
    timestamps:false,
})
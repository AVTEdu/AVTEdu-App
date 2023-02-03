const {Sequelize, DataTypes, Model} = require("sequelize");
const { ConnectDB } = require("../config/mysql.config");
const Khoa = require("./khoa.model");

const sequelize = ConnectDB().getInstance();
/*
*Model Admin
*/

class Admin extends Model {
    //Các mỗi quan hệ của bảng Admin
    static associate(models){
        //Tạo mối quan hệ đến bảng Khoa
        Admin.hasOne(Khoa,{as:'khoa'});
    }
    
};
Admin.init({
    ma_admin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //Khoá ngoại của Khoa tới Admin
    // ma_khoa:{
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Khoa,
    //         key: 'ma_khoa'
    //         }
    //     }
}, {
    sequelize,
    modelName: 'admin',
    timestamps: false,
    freezeTableName: true
});
module.exports = Admin;
const {Sequelize, DataTypes, Model} = require("sequelize");
const { ConnectDB } = require("../config/mysql.config");

const sequelize = ConnectDB().getInstance();

class GiangVien extends Model {}

GiangVien.init({
    ma_giang_vien:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    ten_giang_vien:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    ngay_sinh:{
        type:DataTypes.DATE,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    gioi_tinh:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    //Tạo mã khoá ngoại khoa
    ma_khoa:{
        type:DataTypes.INTEGER,
        references:{
            model:'khoa',
            key:'ma_khoa'
        }
    }
},{
    sequelize,
    modelName:'chuyen_nganh',
    timestamps:false,
    freezeTableName:true 
});
module.exports=GiangVien;
const {Sequelize, DataTypes, Model} = require("sequelize");
const { ConnectDB } = require("../config/mysql.config");


const sequelize = ConnectDB().getInstance();

class HocPhi extends Model {}

HocPhi.init({
    ma_hoc_phi:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    noi_dung_thu:{
        type:DataTypes.STRING,
    },
    trang_thai_dang_ki:{
        type:DataTypes.STRING,
    },
    so_tien:{
        type:DataTypes.BIGINT,
    },
    mien_giam:{
        type:DataTypes.BOOLEAN,
    },
    so_tien_da_nop:{
        type:DataTypes.BIGINT,
    },
    cong_no:{
        type:DataTypes.BIGINT,
    },
    trang_thai:{
        type:DataTypes.STRING,
    },
    //Tạo khoá ngoại khoa
    ma_hoc_phan:{
        type:DataTypes.INTEGER,
        references:{
            model:"hoc_phan",
            key:"ma_hoc_phan"
        }
    },
},{
    sequelize,
    modelName:'hoc_phi',
    timestamps:false,
    freezeTableName:true 
});
module.exports=HocPhi;
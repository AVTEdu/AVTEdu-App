const { Sequelize, DataTypes, Model} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");
const bcrypt = require("bcryptjs");

const sequelize = ConnectDB();

class SinhVien extends Model {}

SinhVien.init ({
   ma_sinh_vien: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
   },
   ho_ten_sinh_vien: {
     type: DataTypes.STRING,
     allowNull: false
   },
   ngay_sinh: {
     type: DataTypes.DATEONLY,
     allowNull:false
   },
   email: {
     type: DataTypes.STRING,
   },
   gioitinh:{
     type: DataTypes.BOOLEAN,
     allowNull:false,
   },
   ho_khau_thuong_tru:{
     type: DataTypes.STRING,
   },
   mat_khau:{
     type: DataTypes.STRING,
     allowNull:false,
   },
   so_dien_thoai:{
     type: DataTypes.CHAR(10),
   },
   so_cmnd:{
     type: DataTypes.CHAR(20),
   }
  }, {
    sequelize,
    modelName:'sinh_vien',
    timestamps:false,
    freezeTableName:true
  })

SinhVien.sync({ alter: true });



SinhVien.prototype.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.mat_khau);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = SinhVien;

const { Sequelize, DataTypes, Model } = require("sequelize");
const Connect_MySQL = require("../until/Connect_MySQL");
const bcrypt = require("bcryptjs");
const TonGiao = require("./tongiao.model");
const DanToc = require("./dantoc.model");
const Khoa = require("./khoa.model");
const BacDaoTao = require("./bacdaotao.model");
const KhoaHoc = require("./khoahoc.model");
const MoHinhDaoTao = require("./mohinhdaotao.model");
const TrangThaiHocTap = require("./trangthaihoctap.model");

const sequelize = Connect_MySQL.ConnectDB();

class SinhVien extends Model {
  isValidPassword = async function (newPassword) {
    try {
      return await bcrypt.compare(newPassword, this.mat_khau);
    } catch (error) {
      throw new Error(error);
    }
  };
  createImageUrl = () =>{

  }
}

<<<<<<< HEAD
SinhVien.init({
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
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
  },
  gioitinh: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  ho_khau_thuong_tru: {
    type: DataTypes.STRING,
  },
  mat_khau: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  so_dien_thoai: {
    type: DataTypes.CHAR(10),
  },
  so_cmnd: {
    type: DataTypes.CHAR(20),
  }
}, {
  sequelize,
  modelName: 'sinh_vien',
  timestamps: false,
  freezeTableName: true
})

SinhVien.sync({ alter: true });
=======
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
   },
   ma_dan_toc:{
     type: DataTypes.INTEGER,
     references:{
      model:DanToc,
      key:"ma_dan_toc",
     }
   },
   ma_khoa:{
    type: DataTypes.INTEGER,
     references:{
      model:Khoa,
      key:"ma_khoa",
     }
   },
   ma_mo_hinh_dao_tao:{
    type: DataTypes.INTEGER,
     references:{
      model:MoHinhDaoTao,
      key:"ma_mo_hinh_dao_tao",
     }
   },
   ma_bac_dao_tao:{
    type: DataTypes.INTEGER,
     references:{
      model:BacDaoTao,
      key:"ma_bac_dao_tao",
     }
   },
   ma_khoa_hoc:{
    type: DataTypes.INTEGER,
     references:{
      model:KhoaHoc,
      key:"ma_khoa_hoc",
     }
   },
   ma_trang_thai_hoc_tap:{
    type: DataTypes.INTEGER,
     references:{
      model:TrangThaiHocTap,
      key:"ma_trang_thai_hoc_tap",
     }
   }
  }, {
    sequelize,
    modelName:'sinh_vien',
    timestamps:false,
    freezeTableName:true
  })
>>>>>>> 5c9f8b2df97263c970dcc8e01faab63e207a9a3a
module.exports = SinhVien;

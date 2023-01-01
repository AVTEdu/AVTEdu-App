const {Sequelize, DataTypes} = require("sequelize");
const ConnectDB = require("../until/Connect_MySQL");

const sequelize = ConnectDB();


const SinhVien = sequelize.define("sinh_vien", {
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
});

sequelize.sync().then(() => {
   console.log('Book table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});
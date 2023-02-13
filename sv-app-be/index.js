require('dotenv').config();
require('./src/helpers/connect_redis');
const http = require('http');
const express = require('express');
const { route } = require('./src/router/home.router');
const app = express();
const server = http.createServer(app);
const SinhVien = require('./src/model/sinhvien.model');
const Khoa = require('./src/model/khoa.model');
const BacDaoTao = require('./src/model/bacdaotao.model');
const DanToc = require('./src/model/dantoc.model');
const KhoaHoc = require('./src/model/khoahoc.model');
const MoHinhDaoTao = require('./src/model/mohinhdaotao.model');
const TonGiao = require('./src/model/tongiao.model');
const TrangThaiHocTap = require('./src/model/trangthaihoctap.model');
const Admin = require('./src/model/admin.model');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


const PORT = process.env.PORT || 9090

const homeRouter = require('./src/router/home.router');
const { ConnectDB } = require('./src/config/mysql.config');
const ChuyenNganhHocPhan = require('./src/model/chuyennganhhocphan.model');
const HocKi = require('./src/model/hocki.model');
const LopHocPhan = require('./src/model/lophocphan.model');
const HocPhan = require('./src/model/hocphan.model');
const LoaiPhongHoc = require('./src/model/loaiphonghoc.model');
const PhanCongLopHocPhan = require('./src/model/phanconglophocphan.model');
const PhongHoc = require('./src/model/phonghoc.model');
const ThoiKhoaBieu = require('./src/model/thoikhoabieu.model');
const ThoiKhoaBieuSinhVien = require('./src/model/thoikhoabieusinhvien.model');
const GiangVien = require('./src/model/giangvien.model');
const MonHoc = require('./src/model/monhoc.model');
const ChuyenNganh = require('./src/model/chuyennganh.models');
const KetQuaHocTap = require('./src/model/ketquahoctap.model');
const HocPhi = require('./src/model/hocphi.model');
const HocPhiSinhVien = require('./src/model/hocphisinhvien.model');


ConnectDB().getInstance();
const corsConfig = {
  credentials: true,
  origin: true,
};
//Hiện kết quả request trên termail
app.use(morgan('dev'));
app.use(cors(corsConfig));
//Chặn lỗi CORS policy
// app.use(function(req, res, next) {
//   var allowedOrigins = [   'http://localhost:3000' ];
//   var origin = req.headers.origin;
//   if (allowedOrigins.indexOf(origin) > -1) {
//     res.header("Access-Control-Allow-Origin", origin);
//   }
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("controller/public"));
app.use(cookieParser());
app.use("/", homeRouter);







// SinhVien.sync();
TrangThaiHocTap.sync();
Khoa.sync();
BacDaoTao.sync();
DanToc.sync();
KhoaHoc.sync();
MoHinhDaoTao.sync();
TonGiao.sync();
TrangThaiHocTap.sync();
Admin.sync();
MonHoc.sync();
SinhVien.sync();
HocKi.sync();
HocPhan.sync();
LopHocPhan.sync();
ChuyenNganh.sync();
LoaiPhongHoc.sync();
PhanCongLopHocPhan.sync();
PhongHoc.sync();
ThoiKhoaBieu.sync();
ThoiKhoaBieuSinhVien.sync({alter:true});
ChuyenNganhHocPhan.sync();
GiangVien.sync();
KetQuaHocTap.sync();
HocPhi.sync();
HocPhiSinhVien.sync();
// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
// Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,PATCH, DELETE');

  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,a_custom_header'); //notice here carefully

  // res.setHeader('Access-Control-Allow-Credentials', true);
  // next();

  // response to client
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });



});

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Expose-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// })

server.listen(PORT, function () {
  console.log(`Server is listening in port ${PORT}`);
})
require('dotenv').config();
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


const PORT = process.env.PORT || 9090

const homeRouter = require('./src/router/home.router');
const { ConnectDB } = require('./src/config/mysql.config');

ConnectDB().getInstance();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", homeRouter);
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));
app.use(morgan('dev'));


SinhVien.sync();
TrangThaiHocTap.sync();
Khoa.sync();
BacDaoTao.sync();
DanToc.sync();
KhoaHoc.sync();
MoHinhDaoTao.sync();
TonGiao.sync();
TrangThaiHocTap.sync();
Admin.sync();
SinhVien.sync();

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
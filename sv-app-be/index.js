require('dotenv').config();
const http = require('http');
const express = require('express');
const { route } = require('./src/router/home.router');
const app = express();
const server = http.createServer(app);
const SinhVien = require('./src/model/sinhvien.model')

const PORT = process.env.PORT || 9090

const  homeRouter = require('./src/router/home.router');
const ConnectDB = require('./src/until/Connect_MySQL');

ConnectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/",homeRouter);

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
server.listen(PORT, function(){
    console.log(`Server is listening in port ${PORT}`);
})
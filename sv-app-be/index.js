require('dotenv').config();
const http = require('http');
const experss = require('express');
const { route } = require('./src/router/home.router');
const app = experss();
const server = http.createServer(app);

const PORT = process.env.PORT || 9090

const  homeRouter = require('./src/router/home.router');
const ConnectDB = require('./src/until/Connect_MySQL');
app.use("/",homeRouter)
ConnectDB();

server.listen(PORT, function(){
    console.log(`Server is listening in port ${PORT}`);
})
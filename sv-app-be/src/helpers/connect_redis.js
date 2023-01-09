const Redis = require('ioredis');
const fs = require('fs');
require('dotenv').config();

const client = new Redis({
    host:process.env.REDIS_CONNECT_URL,
    port:process.env.REDIS_CONNECT_PORT,
    password:process.env.REDIS_CONNECT_PASSWORD,
});
client.ping((err, pong) => {
  console.log(pong);
});
client.on("error", (error) => {
  console.log(error);
});
client.on("connect", (error) => {
  console.log("connected");
});
client.on("ready", (error) => {
  console.log("Redis to ready");
});
module.exports = client;

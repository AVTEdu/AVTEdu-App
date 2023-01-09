const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');
require('dotenv').config();


// const DatabaseName= process.env.DATABASE_NAME  ;
// const DatabaseUsername= process.env.DATABASE_USERNAME  ;
// const DatabasePassword= process.env.DATABASE_PASSWORD  ;

const DatabaseName=   "sinhviendb";
const DatabaseUsername=  "root";
const DatabasePassword= "sapassword";

const CheckDB = () =>{
    mysql.createConnection({
        user     : DatabaseUsername,
        password : DatabasePassword
    }).then((connection) => {
        connection.query(`CREATE DATABASE IF NOT EXISTS ${DatabaseName};`);
    });
}
const ConnectDB = () =>{
    const sequelize= new Sequelize(
        `${DatabaseName}`,
        `${DatabaseUsername}`,
        `${DatabasePassword}`,
        {
            host:'localhost',
            dialect:'mysql',
            // logging: false,
        }
    );
    
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });   
    return sequelize;

}
ConnectDB();
module.exports = {
    ConnectDB,
    CheckDB};

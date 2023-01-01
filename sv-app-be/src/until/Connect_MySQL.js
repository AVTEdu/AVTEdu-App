const Sequelize = require('sequelize');

const ConnectDB = () =>{
    const sequelize= new Sequelize(
        'studentdb',
        'root',
        'sapassword',
        {
            host:'localhost',
            dialect:'mysql',
        }
    );
    
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });
   
    return sequelize;

}

module.exports = ConnectDB;

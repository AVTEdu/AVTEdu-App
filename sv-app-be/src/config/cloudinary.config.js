const cloudinary = require('cloudinary').v2;
//Khai báo các biến cần thiết để config đến instance Cloudinary
const CLOUD_NAME = process.env.CLOUDINARY_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECERT;

//Tạo instance đến Cloudinary
const ConnectImage = (function(){
  var instance;
  function init (){
    cloudinary.config({
      cloud_name: CLOUD_NAME,
      api_key: API_KEY,
      api_secret: API_SECRET
    });
    return cloudinary;
  }
  return {
    getInstance : function(){
        if (!instance) instance = init();
        return instance;
    }
  }
})
module.exports = {
  ConnectImage
};
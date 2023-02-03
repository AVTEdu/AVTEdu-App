const { ConnectImage } = require("./Connect_Cloudinary");


const cloudinary = ConnectImage().getInstance();
// Upload

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})

// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });


// // Generate 
// const url = cloudinary.url("olympic_flag", {
//   width: 100,
//   height: 150,
//   Crop: 'fill'
// });
cloudinary.search
  .expression('resource_type:image')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute()
  .then(result=>console.log(result));
// The output url

// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
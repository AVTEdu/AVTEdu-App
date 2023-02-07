const { createUserWithEmailAndPassword, sendEmailVerification ,signInWithEmailAndPassword,onAuthStateChanged,signOut} = require("firebase/auth");
const client = require("../helpers/connect_redis");
const { signAccessToken, signRefreshToken, verifyAccessToken, verifyRefreshToken } = require("../helpers/jwt.service");
const { defaultAuth } = require("./firebase.config");
const redis = require("redis");
const email = "vietanh6jk@gmail.com";
const password = "123456a"
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    
}
// const s = process.env.ACCESS_TOKEN_SECRET;
// console.log(s);

// signInWithEmailAndPassword(defaultAuth, email, password)
//   .then((userCredential) => {
//     // Signed in 
    
      
//     console.log("Đã đăng nhập "+email);
    
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// onAuthStateChanged(defaultAuth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       console.log('id la:'+uid)
//       const emailVerified = user.emailVerified;
//       console.log(emailVerified);
//       if(!emailVerified)
//       sendEmailVerification(user)
//       .then(() => {
//         console.log ('Email verification sent!');
//     // ...
//       });
//       // ...
//     } else {
//       console.log('k co user dang nhap')
//     }
//   });
// signOut(defaultAuth).then(()=>{
//   console.log("Đã log out tài khoản");
// }).catch((error)=>{
//   console.log("Lỗi log out tài khoản");
// })
// Construct the email link credential from the current URL.

// createUserWithEmailAndPassword(defaultAuth,email, password)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     console.log('The password is too weak.');
//   } else {
//     console.log(errorMessage);
//   }
//   console.log(error);
// });
// client.set("key", "value", redis.print);


// signAccessToken("19504781").then((token) => {
//     console.log(token);
//     verifyAccessToken
//     }).catch((error) => {
//     console.error(error);
//     });
// signRefreshToken("19504781").then((token) => {
//         console.log(token);
//         verifyRefreshToken(token).then((ma)=>{
//             console.log(ma);
//         })
//         }).catch((error) => {
//         console.error(error);
//         });




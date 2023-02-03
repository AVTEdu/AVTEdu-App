const { createUserWithEmailAndPassword, sendEmailVerification } = require("firebase/auth");
const { defaultAuth } = require("./firebase.config");
const email = "vietanh6jk@gmail.com";
const password = "123456a"
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    
}
sendEmailVerification(defaultAuth,email,actionCodeSettings)
.then(
    console.log("Da gui email")
);

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
const { momoPayment } = require("./momo.config");

const a = momoPayment('pay with momo','20000','MOMO','captureWallet');
console.log("------------------------------------------------------------------------------------");
console.log(a);

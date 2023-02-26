const https = require('https');
const crypto = require('crypto');

//https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
function momoPayment(orderInfo,amount,partnerCode,requestType){
  //parameters
  var accessKey = 'F8BBA842ECF85';
  var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
  var orderInfo = orderInfo;
  var partnerCode = partnerCode;
  var redirectUrl = 'http:localhost:4000/hello';
  var ipnUrl = 'http:localhost:4000/hello';
  var requestType = requestType;
  var amount = amount;
  var orderId = partnerCode + new Date().getTime();
  var requestId = orderId;
  var extraData ='';
  var orderGroupId ='';
  var autoCapture =true;
  var lang = 'vi';
  
  //before sign HMAC SHA256 with format
  //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
  var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;
  //puts raw signature
  console.log("--------------------RAW SIGNATURE----------------")
  console.log(rawSignature)
  //signature
  const crypto = require('crypto');
  var signature = crypto.createHmac('sha256', secretKey)
      .update(rawSignature)
      .digest('hex');
  console.log("--------------------SIGNATURE----------------")
  console.log(signature)
  
  //json object send to MoMo endpoint
  const requestBody = JSON.stringify({
      partnerCode : partnerCode,
      partnerName : "Test",
      storeId : "MomoTestStore",
      requestId : requestId,
      amount : amount,
      orderId : orderId,
      orderInfo : orderInfo,
      redirectUrl : redirectUrl,
      ipnUrl : ipnUrl,
      lang : lang,
      requestType: requestType,
      autoCapture: autoCapture,
      extraData : extraData,
      orderGroupId: orderGroupId,
      signature : signature
  });
  //Create the HTTPS objects
  const https = require('https');
  const options = {
      hostname: 'test-payment.momo.vn',
      port: 443,
      path: '/v2/gateway/api/create',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(requestBody)
      }
  }
  //Send the request and get the response
  const req = https.request(options, res => {
      console.log(`Status: ${res.statusCode}`);
      console.log(`Headers: ${JSON.stringify(res.headers)}`);
      res.setEncoding('utf8');
      res.on('data', (body) => {
          console.log('Body: ');
          console.log(body);
          console.log('resultCode: ');
          console.log(JSON.parse(body).resultCode);
      });
      res.on('end', () => {
          console.log('No more data in response.');
      });
  })
  
  req.on('error', (e) => {
      console.log(`problem with request: ${e.message}`);
  });
  // write data to request body
  console.log("Sending....")
  req.write(requestBody);
  req.end();
  return 
  }
module.exports = {momoPayment};
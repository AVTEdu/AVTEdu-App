const https = require('https');
const crypto = require('crypto');
const querystring = require('querystring');

const momoPayment = (amount, orderInfo ,extraData,orderGroupId ) => {
  return new Promise((resolve, reject) => {
    // Replace with your own values or load them from a config file
    const partnerCode = "MOMO";
    const accessKey = "F8BBA842ECF85";
    const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    const requestType = "payWithMethod";
    const orderId = partnerCode + Date.now().toString();
    // Generate a unique requestId
    const requestId = orderId;
    const paymentCode = 'T8Qii53fAXyUftPV3m9ysyRhEanUs9KlOPfHgpMR0ON50U10Bh+vZdpJU7VY4z+Z2y77fJHkoDc69scwwzLuW5MzeUKTwPo3ZMaB29imm6YulqnWfTkgzqRaion+EuD7FN9wZ4aXE1+mRt0gHsU193y+yxtRgpmY7SDMU9hCKoQtYyHsfFR5FUAOAKMdw2fzQqpToei3rnaYvZuYaxolprm9+/+WIETnPUDlxCYOiw7vPeaaYQQH0BF0TxyU3zu36ODx980rJvPAgtJzH1gUrlxcSS1HQeQ9ZaVM1eOK/jl8KJm6ijOwErHGbgf/hVymUQG65rHU2MWz9U8QUjvDWA==';

    // Construct the raw signature string
    const rawSignature = `partnerCode=${partnerCode}&accessKey=${accessKey}&requestId=${requestId}&amount=${amount}&orderId=${requestId}&orderInfo=${orderInfo}&returnUrl=&notifyUrl=&extraData=`;
    console.log("--------------------RAW SIGNATURE----------------")
    console.log(rawSignature)
    // Sign the raw signature using the secret key
    const signature = crypto.createHmac('sha256', secretKey)
    .update(rawSignature)
    .digest('hex');
    console.log("--------------------SIGNATURE----------------")
    console.log(signature)


    // Construct the request body
    const requestBody = JSON.stringify({
      partnerCode : partnerCode,
      accessKey : accessKey,
      requestId : requestId,
      amount : amount,
      orderId : orderId,
      orderInfo : orderInfo,
      redirectUrl : '',
      ipnUrl : '',
      extraData : extraData,
      requestType : requestType,
      signature : signature,
      lang: 'vi',
    });

    // Convert the request body to a string and URL encode it
    const requestBodyString = querystring.stringify(requestBody);

    // Set up the request options
    const options = {
      hostname: 'test-payment.momo.vn',
      port: 443,
      path: '/v2/gateway/api/create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBodyString),
      },
    };

    // Send the request
    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (body) => {
      console.log('Body: ');
      console.log(body);
      console.log('payUrl: ');
      console.log(JSON.parse(body).payUrl);
      resolve(body)
      });
      res.on('end', () => {
                // console.log('No more data in response.');
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(requestBodyString);
    req.end();
  });
};

// Example usage:
momoPayment('100000', 'Order #1234','','').then((response) => {
  console.log(response);
}).catch((err) => {
  console.error(err);
});

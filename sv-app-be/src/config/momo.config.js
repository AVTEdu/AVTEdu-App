const https = require('https');
const crypto = require('crypto');

function momoPayment(props, client) {
  const partnerCode = "MOMO";
  const accessKey = "F8BBA842ECF85";
  const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
  const orderId = client.makh + '_' + new Date().getTime();
  const orderInfo = `Thành viên ${client.tenkh} thực hiện thanh toán`;
  const amount = props.phi_san_pham + props.phi_van_chuyen - props.phi_giam;
  const redirectUrl = "localhost:3000/hello";
  const ipnUrl = "localhost:3000/hello/camon";
  const requestType = 'captureWallet';
  const extraData = '';

  const requestId = partnerCode + new Date().getTime();

  const rawSignature =
    `partnerCode=${partnerCode}&accessKey=${accessKey}&requestId=${requestId}` +
    `&amount=${amount}&orderId=${orderId}&orderInfo=${orderInfo}` +
    `&returnUrl=${redirectUrl}&notifyUrl=${ipnUrl}` +
    `&extraData=${extraData}&requestType=${requestType}`;

  const signature = crypto
    .createHmac('sha256', secretKey)
    .update(rawSignature)
    .digest('hex');

  const options = {
    hostname: 'test-payment.momo.vn',
    port: 443,
    path: '/gw_payment/transactionProcessor',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const data = JSON.stringify({
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    returnUrl: redirectUrl,
    notifyUrl: ipnUrl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
  });

    const req = https.request(options, res => {
            // console.log(`Status: ${res.statusCode}`);
            // console.log(`Headers: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (body) => {
                // console.log('Body: ');
                // console.log(body);
                // console.log('payUrl: ');
                // console.log(JSON.parse(body).payUrl);
                resolve(body)

            });
            res.on('end', () => {
                // console.log('No more data in response.');
            });
        })
    }
module.exports = {momoPayment};
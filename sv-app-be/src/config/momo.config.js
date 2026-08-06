const https = require('https');
const crypto = require('crypto');

//https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
function momoPayment(orderInfo, amount) {
    var accessKey = process.env.MOMO_ACCESS_KEY;
    var secretKey = process.env.MOMO_SECRET_KEY;
    var partnerCode = process.env.MOMO_PARTNER_CODE;
    var redirectUrl = process.env.MOMO_REDIRECT_URL;
    var ipnUrl = process.env.MOMO_IPN_URL;
    var requestType = "payWithMethod";
    var orderId = partnerCode + new Date().getTime();
    var requestId = orderId;
    var extraData = '';
    var orderGroupId = '';
    var autoCapture = true;
    var lang = 'vi';

    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;
    //signature
    var signature = crypto.createHmac('sha256', secretKey)
        .update(rawSignature)
        .digest('hex');

    //json object send to MoMo endpoint
    const requestBody = JSON.stringify({
        partnerCode: partnerCode,
        partnerName: "Test",
        storeId: "MomoTestStore",
        requestId: requestId,
        amount: amount,
        orderId: orderId,
        orderInfo: orderInfo,
        redirectUrl: redirectUrl,
        ipnUrl: ipnUrl,
        lang: lang,
        requestType: requestType,
        autoCapture: autoCapture,
        extraData: extraData,
        orderGroupId: orderGroupId,
        signature: signature
    });
    //Create the HTTPS objects
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

    return new Promise((resolve, reject) => {
        const req = https.request(options, res => {
            res.setEncoding('utf8');
            res.on('data', (body) => {
                resolve(body);
            });
        });
        req.on('error', reject);
        req.write(requestBody);
        req.end();
    });
}

//Verify signature of the callback (returnUrl/IPN) sent by MoMo.
//MoMo signs the following fields in this exact order:
//accessKey, amount, extraData, message, orderId, orderInfo, orderType,
//partnerCode, payType, requestId, responseTime, resultCode, transId
function verifyMomoSignature(params) {
    const accessKey = process.env.MOMO_ACCESS_KEY;
    const secretKey = process.env.MOMO_SECRET_KEY;
    const fields = [
        'amount',
        'extraData',
        'message',
        'orderId',
        'orderInfo',
        'orderType',
        'partnerCode',
        'payType',
        'requestId',
        'responseTime',
        'resultCode',
        'transId',
    ];
    let rawSignature = 'accessKey=' + accessKey;
    for (const field of fields) {
        const value = params[field] !== undefined ? params[field] : '';
        rawSignature += '&' + field + '=' + value;
    }
    const expectedSignature = crypto.createHmac('sha256', secretKey)
        .update(rawSignature)
        .digest('hex');
    return params.signature === expectedSignature;
}

module.exports = { momoPayment, verifyMomoSignature };

const responseWithData = (res, statusCode, data) =>
  res.status(statusCode).json(data);

const ok = (res, data) => responseWithData(res, 200, { status: 200, data });
const created = (res, data) => responseWithData(res, 201, { status: 201, data });

const error = (res, err) => responseWithData(res, 500, { status: 500, err });

module.exports = { ok, error ,created};

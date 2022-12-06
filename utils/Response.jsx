const Response = (r, code, status, message, data) => r.status(code).send({status, message, data, code });
export default Response;

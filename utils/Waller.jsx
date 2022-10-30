const Waller = (req, res, next) => {
  if (!req.headers['ApiKey']) {
    res.send(
        {
            status: false,
            message: "Api Key is missing, please include the Api Key!",
            code: 400
        }
    );

    return;
  }

  if(req.headers['ApiKey'] !== process.env.NEXT_PUBLIC_API_KEY) {
    res.send(
        {
            status: false,
            message: "The request Api Key is invalid, please include a valid Api Key!",
            code: 401
        }
    );

    return;
  }

  else next();
};

export default Waller;
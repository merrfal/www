import jwt from 'jsonwebtoken';
const JWTACCESSKEY = process.env.JWT_SECRET;

const Auther = (req, res, next) => {
  if (!req.headers['Token']) {
    res.send(
        {
            status: false,
            message: "This request has not included a Token, please include the required Token.",
            code: 400
        }
    );
    return;
  }

  const authHeader = req.headers['Token'];
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];

  jwt.verify(token, JWTACCESSKEY, (err, payload) => 
    {
        if (err) {
                res.send(
                    {
                        status: false,
                        message: 'This request is not authorized, please include a valid Token!',
                        code: 401
                    }
                );

            return;
        }

        req.payload = payload;
        
        next();
    }
  );
};

export default Auther;
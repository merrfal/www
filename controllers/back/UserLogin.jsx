import { User } from '../../models';

export default async function connection(req, res) {
  try {
    const user = await User.find({ Uid: req.query.uid });
    const { Password, ...data } = user[0]._doc;

    if (user) {
      res.status(200).send(
        {
          status: true,
          data: data,
          message: 'User was found successfully.',
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'User was not found in the database.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'An error occurred while trying to find the user.',
        sysErrors: error,
        data: null,
        code: 500,
      }
    );
  }
}

// import { User } from '../../models';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

// export default async function connection(req, res) {
//   const JWTACCESSKEY = process.env.JWT_SECRET;

//   try {
//     let user = await User.findOne({ email: req.body.email });

//     if (user) {
//       const validated = await bcrypt.compare(req.body.password, user.password);

//         if (validated) {
//           const { password, ...data } = user._doc;
//           const token = jwt.sign({}, JWTACCESSKEY, { expiresIn: '72h' });
//           data.token = token;

//           res.status(200).send(
//             {
//               status: true,
//               message: 'Perdoruesi u identifikua me sukses.',
//               data: data,
//               code: 200,
//             }
//           );
//         } 
        
//         else {
//           res.status(404).send(
//             {
//               status: false,
//               message: 'Fjalëkalimi ose emaili i gabuar.',
//               data: null,
//               code: 404,
//             }
//           );
//         }
//       } 
    
//     else {
//       res.status(404).send(
//         {
//           status: false,
//           message: 'Perdoruesi nuk mundi te identifikohet.',
//           data: null,
//           code: 404,
//         }
//       );
//     }
//   } catch (error) {
//     res.status(500).send(
//       {
//         status: false,
//         message: 'Perdoruesi nuk mundi te identifikohet.',
//         sysError: error,
//         data: null,
//         code: 500,
//       }
//     );
//   }
// }

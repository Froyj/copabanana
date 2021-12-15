const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  const { id, role_id, email } = user;
  const token = jwt.sign({ id, role_id, email }, secret, { expiresIn: '1h' });
  return token;
};

const expressJWT = require('express-jwt');

const auth = expressJWT({ secret, algorithms: ['HS256'] })

module.exports = { auth, generateToken };

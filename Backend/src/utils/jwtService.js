const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const dotenv = require('dotenv');
dotenv.config();


const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '30m' });
};
const verifyAccessToken = (verifydata) => {
  return jwt.verify(verifydata, process.env.JWT_SECRET);
}
const generateRefreshToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_REFRESH_SECRET, { expiresIn: '1y' });
}
const verifyRefreshToken = (verifydata) => {
  return jwt.verify(verifydata, process.env.JWT_REFRESH_SECRET);
}
  exports.generateAccessToken = generateAccessToken;
  exports.verifyAccessToken = verifyAccessToken;
  exports.generateRefreshToken = generateRefreshToken;
  exports.verifyRefreshToken = verifyRefreshToken;
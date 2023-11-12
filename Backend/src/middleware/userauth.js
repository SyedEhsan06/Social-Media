const jwtService = require('../utils/jwtService');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const userauth = async(req, res, next) => {
    let authheader = req.headers.authorization;
    if (!authheader) {
        return res.status(401).json({ errors: [{ msg: 'Authorization denied' }] });
    }
    const token = authheader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ errors: [{ msg: 'Unauthorized' }] });
    }
   try{
    const data = await jwt.verify(token, process.env.JWT_SECRET);
    const user ={
       _id: data.user._id,
       role: data.user.role,
    }
    req.user = user;
    next();
   }catch(err){
    console.error(err);
    res.status(401).json({ errors: [{ msg: 'Authorization denied' }] });
   }
}

exports.userauth = userauth;
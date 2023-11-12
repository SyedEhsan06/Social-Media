const User = require("../models/userSchema");
const refresh = require("../models/refeshSchema");
const { body, validationResult } = require("express-validator");
const { generateAccessToken } = require("../utils/jwtService");
const { generateRefreshToken } = require("../utils/jwtService");
const { verifyRefreshToken } = require("../utils/jwtService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    const newUser = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    const savedUser = await newUser.save();
    const accessdata = { id: savedUser._id, role: savedUser.role };
    const access_token = generateAccessToken(accessdata);
    const refresh_token = generateRefreshToken(accessdata);
    await refresh.create({ token: refresh_token });
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: false,
   

    });
    res.cookie("access_token", access_token, {
      httpOnly: false,
      secure: false,
   
      
    });
    res.status(200).json({ access_token, refresh_token }); // Updated this line
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: "Registration failed" }] });
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const access_token = generateAccessToken(user);
    const refresh_token = generateRefreshToken(user);
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: false,
      domain: ".localhost",
    });
    res.cookie("access_token", access_token, {
      httpOnly: false,
      secure: false,
      domain: ".localhost",

    });
    res.status(200).json({ access_token, refresh_token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: "Login failed" }] });
  }
};
/////////////////////////////////////////////////////////////////////////////
const me = async (req, res) => {
  const userId = req.user._id;
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User not found" }] });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
};

//////////////////////////////////////////////////

const refreshController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const refreshToken = await refresh.findOne({
      token: req.body.refresh_token,
    });
    if (!refreshToken) {
      return res
        .status(401)
        .json({ errors: [{ msg: "Invalid or expired refresh token" }] });
    }

    const decoded = jwt.verify(
      refreshToken.token,
      process.env.JWT_REFRESH_SECRET
    );
    if (!decoded.user._id) {
      return res
        .status(401)
        .json({ errors: [{ msg: "Invalid refresh token payload" }] });
    }

    const user = await User.findOne({ _id: decoded.user._id });

    if (!user) {
      return res.status(401).json({ errors: [{ msg: "User not found" }] });
    }

    const access_token = generateAccessToken(user);
    const new_refresh_token = generateRefreshToken(user);
    await refresh.create({ token: new_refresh_token });

    res.status(200).json({ access_token, refresh_token: new_refresh_token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
};
const logout = async (req, res) => {
  //
 
  try {
    const refreshToken = await refresh.deleteOne({
      token: req.cookies.refresh_token,
    });
    res.clearCookie('refresh_token');
    res.status(200).json({ msg: "Logout success", refreshToken  });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
};
module.exports = { register, login, me, refreshController, logout };

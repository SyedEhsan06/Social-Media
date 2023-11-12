const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./src/routes/user');
const db = require('./db');
const cors = require('cors')
const cookieparser = require('cookie-parser')
dotenv.config();
const port = process.env.PORT || 3004;
app.get('/', (req, res) => {
res.send("sius");
});
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});
app.use(cookieparser())
app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,  // Set this to true to allow cookies.
};

app.use(cors(corsOptions));
app.use('/api/user', userRoute);  

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

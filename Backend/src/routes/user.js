const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const { userauth } = require('../middleware/userauth');

// Register
router.post(  '/register',
  [
    body('name').notEmpty().isLength({ min: 3, max: 15 }),
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty(),
  ],
  userController.register
);
router.post(  '/login', [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty(),
],userController.login
);
router.get('/me',userauth,userController.me);
router.post('/refresh',[
    body('refresh_token').notEmpty(),
],userController.refreshController);
router.post('/logout',userauth,userController.logout);
module.exports = router;

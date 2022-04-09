const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home); // here 127.0.0.1:8000/ gets executed
module.exports= router;
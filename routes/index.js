const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const taskController = require('../controllers/task_controller');

router.get('/',homeController.home); 
router.post('/add-task', taskController.addTask);
module.exports= router;
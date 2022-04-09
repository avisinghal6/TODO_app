const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const taskController = require('../controllers/task_controller');

router.get('/',taskController.displayTask); 
router.post('/add-task', taskController.addTask);
router.get('/delete-task/:id', taskController.deleteTask);
module.exports= router;
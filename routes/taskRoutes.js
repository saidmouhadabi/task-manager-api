const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/', taskController.getAllTasks);
router.post('/', taskController.addTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.put('/:id/status', taskController.updateTaskStatus);

module.exports = router;

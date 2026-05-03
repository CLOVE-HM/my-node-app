import express from 'express';
import tasksController from '../controllers/tasks.js';

const router = express.Router();

router.route('/')
    .get(tasksController.getTasks)
    .post(tasksController.createTask);

router.route('/:id')
    .get(tasksController.getTaskById)
    .put(tasksController.updateTask)
    .patch(tasksController.updateTaskPartially)
    .delete(tasksController.deleteTask);

export default router;
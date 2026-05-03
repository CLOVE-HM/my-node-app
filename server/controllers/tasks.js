import { tasks, generateId, generateDate } from '../data.js';
import { successResponse, errorResponse } from '../common/response.js';

const getTasks = (req, res) => {
    const { search, limit } = req.query;
    let filteredTasks = tasks;
    if (search) {
        filteredTasks = filteredTasks.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (limit) {
        filteredTasks = filteredTasks.slice(0, parseInt(limit));
    }
    res.json(successResponse(filteredTasks));
};

const getTaskById = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json(errorResponse('Task not found'));
    }
    res.json(successResponse(task));
};

const createTask = (req, res) => {
    const { name, owner, desc, due } = req.body;
    if (!name || !owner || !desc || !due) {
        return res.status(400).json(errorResponse('Missing required fields: name, owner, desc, due'));
    }
    const newTask = {
        id: generateId(),
        name,
        owner,
        desc,
        due,
        created: generateDate() // Set created to current date/time
    };
    tasks.push(newTask);
    res.status(201).json(successResponse(newTask));
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json(errorResponse('Task not found'));
    }
    const { name, owner, desc, due } = req.body;
    task.name = name;
    task.owner = owner;
    task.desc = desc;
    task.due = due;
    res.json(successResponse(task));
};

const updateTaskPartially = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json(errorResponse('Task not found'));
    }
    const { name, owner, desc, due } = req.body;
    if (name) {
        task.name = name;
    }
    if (owner) {
        task.owner = owner;
    }
    if (desc) {
        task.desc = desc;
    }
    if (due) {
        task.due = due;
    }
    res.json(successResponse(task));
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json(errorResponse('Task not found'));
    }
    const task = tasks.splice(taskIndex, 1);
    res.json(successResponse(task, 'Task deleted successfully'));
};


export default { getTasks, getTaskById, createTask, updateTask, updateTaskPartially, deleteTask };
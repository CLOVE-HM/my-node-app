
import express from 'express';
import path from 'path';
import { middlewareA, middlewareB } from './middleware/middleware.js';
import tasksRouter from './routes/tasks.js';
import usersRouter from './routes/users.js';

const app = express();
const PORT = 3000;

// app.use(express.static(path.join(import.meta.dirname, './assets')));
app.use(express.static('./server/assets'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/{*path}/data', [middlewareA, middlewareB]);
app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    console.log('Hello World running');
    res.send('Hello, World!');
});

app.all('/{*path}', (req, res) => {
    const capturedPath = req.params.path;
    res.status(404).json({ error: 'Not Found', path: capturedPath });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
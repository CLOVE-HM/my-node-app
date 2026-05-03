
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// app.use(express.static(path.join(import.meta.dirname, './assets')));
app.use(express.static('./server/assets'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/data/a', (req, res) => {
  res.json({ message: 'This is data A.' });
});

app.get('/api/data/b', (req, res) => {
  res.json({ message: 'This is data B.' });
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is some data from the server.' });
});

app.all('/{*path}', (req, res) => {
    const capturedPath = req.params.path;
  res.status(404).json({ error: 'Not Found', path: capturedPath });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
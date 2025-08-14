const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasksRoutes);

app.listen(PORT, () => {
  console.log(`API Server running at http://localhost:${PORT}`);
});

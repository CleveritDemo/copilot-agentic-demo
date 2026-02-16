const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const filePath = path.join(__dirname, '../data/tasks.json');

function readTasks() {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

exports.getAllTasks = (req, res) => {
  res.json(readTasks());
};

exports.createTask = (req, res) => {
  const tasks = readTasks();
  const { title, completed = false, category = '' } = req.body;
  
  // Validate title
  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ message: 'Title is required and must be a non-empty string' });
  }
  if (title.length > 500) {
    return res.status(400).json({ message: 'Title must not exceed 500 characters' });
  }
  
  // Validate and process category
  let processedCategory = '';
  if (category !== undefined && category !== null) {
    if (typeof category !== 'string') {
      return res.status(400).json({ message: 'Category must be a string' });
    }
    const trimmedCategory = category.trim();
    if (trimmedCategory.length > 100) {
      return res.status(400).json({ message: 'Category must not exceed 100 characters' });
    }
    processedCategory = trimmedCategory;
  }
  
  const newTask = { 
    id: uuidv4(), 
    title: title.trim(), 
    completed: Boolean(completed), 
    category: processedCategory
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  // Validate title if provided
  if (req.body.title !== undefined) {
    if (typeof req.body.title !== 'string' || req.body.title.trim().length === 0) {
      return res.status(400).json({ message: 'Title must be a non-empty string' });
    }
    if (req.body.title.length > 500) {
      return res.status(400).json({ message: 'Title must not exceed 500 characters' });
    }
    task.title = req.body.title.trim();
  }
  
  // Validate and process category if provided
  if (req.body.category !== undefined) {
    if (req.body.category !== null && typeof req.body.category !== 'string') {
      return res.status(400).json({ message: 'Category must be a string' });
    }
    const trimmedCategory = req.body.category ? req.body.category.trim() : '';
    if (trimmedCategory.length > 100) {
      return res.status(400).json({ message: 'Category must not exceed 100 characters' });
    }
    task.category = trimmedCategory;
  }
  
  // Update completed status if provided
  if (req.body.completed !== undefined) {
    task.completed = Boolean(req.body.completed);
  }
  
  writeTasks(tasks);
  res.json(task);
};

exports.deleteTask = (req, res) => {
  let tasks = readTasks();
  tasks = tasks.filter(t => t.id !== req.params.id);
  writeTasks(tasks);
  res.status(204).send();
};

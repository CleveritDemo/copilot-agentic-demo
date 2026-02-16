const API_URL = 'http://localhost:3000/api/tasks';
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const categoryInput = document.getElementById('categoryInput');
const themeToggle = document.getElementById('themeToggle');
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const editTaskInput = document.getElementById('editTaskInput');
const editCategoryInput = document.getElementById('editCategoryInput');
const cancelBtn = document.querySelector('#editModal .cancel-btn');

let currentEditingTaskId = null;

// Theme functionality
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

themeToggle.addEventListener('click', toggleTheme);

// Initialize theme on page load
initTheme();

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  taskList.innerHTML = '';
  tasks.forEach(addTaskToDOM);
}

function addTaskToDOM(task) {
  const li = document.createElement('li');
  
  // Create task text span
  const taskSpan = document.createElement('span');
  if (task.completed) {
    taskSpan.className = 'completed';
  }
  taskSpan.textContent = task.title;
  
  // Add category label if present
  if (task.category) {
    const categorySpan = document.createElement('span');
    categorySpan.className = 'category';
    categorySpan.textContent = `[${task.category}]`;
    taskSpan.appendChild(document.createTextNode(' '));
    taskSpan.appendChild(categorySpan);
  }
  
  // Create buttons container
  const buttonsDiv = document.createElement('div');
  
  // Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.addEventListener('click', () => openEditModal(task.id, task.title, task.category || ''));
  
  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.addEventListener('click', () => toggleComplete(task.id, !task.completed));
  
  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.addEventListener('click', () => deleteTask(task.id));
  
  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);
  
  li.appendChild(taskSpan);
  li.appendChild(buttonsDiv);
  taskList.appendChild(li);
}

taskForm.addEventListener('submit', async e => {
  e.preventDefault();
  const title = taskInput.value;
  const category = categoryInput.value;
  
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category })
    });
    
    if (!res.ok) {
      const error = await res.json();
      alert(`Error: ${error.message || 'Failed to create task'}`);
      return;
    }
    
    const task = await res.json();
    addTaskToDOM(task);
    taskInput.value = '';
    categoryInput.value = '';
  } catch (error) {
    alert('Failed to create task. Please try again.');
    console.error('Error creating task:', error);
  }
});

async function toggleComplete(id, completed) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed })
    });
    
    if (!res.ok) {
      const error = await res.json();
      alert(`Error: ${error.message || 'Failed to update task'}`);
      return;
    }
    
    fetchTasks();
  } catch (error) {
    alert('Failed to update task. Please try again.');
    console.error('Error updating task:', error);
  }
}

async function deleteTask(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    
    if (!res.ok) {
      alert('Failed to delete task. Please try again.');
      return;
    }
    
    fetchTasks();
  } catch (error) {
    alert('Failed to delete task. Please try again.');
    console.error('Error deleting task:', error);
  }
}

function openEditModal(id, title, category = '') {
  currentEditingTaskId = id;
  editTaskInput.value = title;
  editCategoryInput.value = category;
  editModal.style.display = 'flex';
}

function closeEditModal() {
  editModal.style.display = 'none';
  currentEditingTaskId = null;
  editTaskInput.value = '';
  editCategoryInput.value = '';
}

editForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (!currentEditingTaskId) return;
  
  const title = editTaskInput.value;
  const category = editCategoryInput.value;
  
  try {
    const res = await fetch(`${API_URL}/${currentEditingTaskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category })
    });
    
    if (!res.ok) {
      const error = await res.json();
      alert(`Error: ${error.message || 'Failed to update task'}`);
      return;
    }
    
    closeEditModal();
    fetchTasks();
  } catch (error) {
    alert('Failed to update task. Please try again.');
    console.error('Error updating task:', error);
  }
});

// Add cancel button event listener
cancelBtn.addEventListener('click', closeEditModal);

// Close modal when clicking outside
editModal.addEventListener('click', e => {
  if (e.target === editModal) {
    closeEditModal();
  }
});

fetchTasks();

# 📝 ToDo List App – Fullstack PoC

This is a proof of concept (PoC) of a ToDo List application composed of:

- 🧠 **Backend**: REST API in Node.js + Express with filesystem persistence (`tasks.json`)
- 🎨 **Frontend**: HTML + Vanilla JavaScript (no frameworks) using Nginx
- 🐳 **Full support for Docker and Docker Compose**

## 📦 Project structure

(todo-list-app with backend and frontend folders, see details in the source code)

## 🚀 Instructions to run the project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

### 2. Start services with Docker Compose

```bash
docker-compose up --build
```

### 3. Access the application

- Frontend: [http://localhost:8080](http://localhost:8080)
- Backend API: [http://localhost:3000/api/tasks](http://localhost:3000/api/tasks)

## 🐳 `.dockerignore`

### backend/.dockerignore

```dockerignore
node_modules
npm-debug.log
.DS_Store
data/*.json.backup
*.env
*.log
```

### frontend/.dockerignore

```dockerignore
.DS_Store
*.log
node_modules
npm-debug.log
*.env
```

## 📂 Additional notes

- The backend mounts the `backend/data` folder as a volume.
- You can open `frontend/index.html` directly without Docker, but using Nginx is recommended.

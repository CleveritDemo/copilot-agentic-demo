# 📝 ToDo List App – Fullstack PoC

This repository provides a fullstack ToDo List application for hands-on learning and rapid prototyping. It is suitable for Developers, Sysadmins, DevOps, and Cloud Engineers interested in containerized app architectures.

---

## ⚙️ Runtimes & Frameworks

### Backend
- **Runtime:** Node.js (LTS recommended)
- **Framework:** Express.js
- **Persistence:** Filesystem (`tasks.json`)

### Frontend
- **Runtime:** Nginx (production/static serving)
- **Languages:** HTML5, CSS3, Vanilla JavaScript

### Containerization
- **Docker:** Multi-service orchestration via Docker Compose

---

## 📦 Project Structure

```
copilot-agentic-demo/
├── backend/        # Node.js + Express REST API
│   ├── controllers/
│   ├── data/
│   ├── routes/
│   ├── index.js
│   └── Dockerfile
├── frontend/       # Vanilla JS web client, served by Nginx
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🚀 How to Run the Project

### Prerequisites
- Docker and Docker Compose installed
- Modern browser (Chrome, Firefox, Edge, Safari)

### Clone the Repository
```bash
git clone https://github.com/CleveritDemo/copilot-agentic-demo.git
cd copilot-agentic-demo
```

### Build & Start Services
```bash
docker-compose up --build
```
- Backend API: port **3000**
- Frontend (Nginx): port **8080**

### Access the Application

#### Frontend UI
- [http://localhost:8080](http://localhost:8080)

#### Backend API
- [http://localhost:3000/api/tasks](http://localhost:3000/api/tasks)
- Supports CRUD operations (GET, POST, PUT, DELETE)

---

## Advanced Usage & Customization

- **Hot Reload (Dev):** Run backend locally with `node backend/index.js`
- **Direct Frontend Access:** Open `frontend/index.html` for static preview
- **Volumes:** Backend mounts `backend/data` for persistent storage
- **Environment Variables:** Customize via Docker Compose or `.env` files

---

## Docker Ignore Files

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

---

## 📂 Additional Notes

- Backend mounts `backend/data` for persistent task storage
- Frontend is served via Nginx for production; static preview via direct file open
- Security, performance, and container best practices recommended for production

---

## 👨‍💻 Target Audience

- Developers building fullstack apps
- Sysadmins managing containerized services
- DevOps automating deployments
- Cloud Engineers architecting scalable solutions

---

## 📬 Support & Contributions

- For issues or contributions, use the [Issues tab](https://github.com/CleveritDemo/copilot-agentic-demo/issues)


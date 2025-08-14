This is a repository that contains a NodeJS web application as a Backend and a Frontend created using Vanilla JS.
This application is organizized in two main directories:
- `backend`: Contains the NodeJS application that serves as the backend for the web application.
- `frontend`: Contains the Vanilla JS application that serves as the frontend for the web application.

Also there is a `docker-compose.yml` file that can be used to run the application in a Docker container.
The backend is built using NodeJS and Express, and it serves a RESTful API that the frontend can consume.
The frontend is a simple web application that uses Vanilla JS to interact with the backend API.

## Describe project directory structure
The project directory structure is organized as follows:

```
docker-compose.yml
README.md
.github/
    copilot-instructions.md
backend/
    .dockerignore
    .gitignore
    docker-entrypoint.sh
    Dockerfile
    index.js
    package.json
    controllers/
        tasksController.js
    data/
        tasks.json
    routes/
        tasks.js
frontend/
    .dockerignore
    .gitignore
    Dockerfile
    index.html
    script.js
    style.css
```

## Project structure description

-   **backend/**: Contains the REST API developed in Node.js and Express. It manages the tasks and stores the data in a JSON file. Includes controllers, routes, and scripts for Docker initialization.
-   **frontend/**: Simple web application in HTML, CSS, and Vanilla JavaScript. It consumes the backend API and is served via Nginx in production.
-   **docker-compose.yml**: Orchestrates both services (frontend and backend) using Docker.
-   **.github/**: Configurations and instructions for collaborative tools and automation.

This structure facilitates the development, deployment, and maintenance of a modern full-stack application, clearly separating the responsibilities between frontend and backend.


## Model (Agent) Interactions with the User
- Respond in a clear, professional, and problem-solving-oriented manner.
- Request additional information when the user's request is ambiguous or incomplete.
- Offer suggestions and alternatives when there are several valid ways to approach a problem.
- Explain the technical decisions made, especially if they may not be obvious to the user.
- Adapt the level of detail in the responses according to the user's profile and experience level.
- Encourage continuous learning by providing helpful resources or links when relevant.
- Maintain respectful and collaborative communication, as an experienced member of a development team would.
- Be available to review, debug, and improve existing code, as well as propose new solutions.
- Prioritize security, accessibility, and performance in all recommendations and examples.
- If the user requests it, generate technical documentation, diagrams, or automated test examples.

## Key Guidelines
1. Follow JavaScript best practices
2. Maintain existing code structure and organization
3. Use dependency injection patterns where appropriate
4. Write unit tests for new functionality. 
5. Document public APIs and complex logic (if necessary)
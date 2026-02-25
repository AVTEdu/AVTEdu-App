# AGENTS.md

## Cursor Cloud specific instructions

### Overview

AVTEdu-App is a Vietnamese university student management system with three sub-projects:

| Service | Path | Port | Command |
|---------|------|------|---------|
| Backend API | `sv-app-be/` | 4000 | `npm start` (runs `nodemon src/index.js`) |
| Web Frontend | `sv-app-fe/` | 3000 | `npm start` (CRA dev server) |
| Mobile App | `sv-app-mobile/` | — | Not runnable in headless VM (Expo/React Native) |

### Infrastructure Dependencies

The backend requires **MySQL 8.0** and **Redis** running locally via Docker:

```sh
sudo dockerd &  # if Docker daemon not already running
sudo docker start mysql-dev redis-dev  # restart existing containers
# or create fresh:
# sudo docker run -d --name mysql-dev -e MYSQL_ROOT_PASSWORD=sapassword -e MYSQL_DATABASE=sinhviendb -p 3306:3306 mysql:8.0
# sudo docker run -d --name redis-dev -p 6379:6379 redis:alpine3.16
```

Wait for MySQL to be ready before starting the backend (~10-15 seconds after container start).

### Key Gotchas

- **Node.js version**: Use Node 16 (`nvm use 16`). The backend Dockerfile targets `node:16` and some dependencies (e.g., `redis@3.1.2`) are incompatible with newer Node.
- **Frontend `npm install`**: Requires `--legacy-peer-deps` due to conflicting peer dependencies between `@material-ui/core` (React 16-17) and `@mui/material` (React 18).
- **Database config** (`sv-app-be/src/config/mysql.config.js`): Uses env vars `DATABASE_NAME`, `DATABSE_USERNAME` (note: typo is intentional from `.env`), `DATABASE_PASSWORD`, `MYSQL_HOST`, `MYSQL_PORT`. Defaults point to localhost.
- **Frontend API URL** (`sv-app-fe/src/api/axiosClient.js`): Must use `http://localhost:4000/` for local dev (not the remote `https://api.avtedu.cloud/`).
- **Sequelize model sync on fresh DB**: The `ConnectDB` singleton must be a true module-level singleton so `sequelize.sync()` handles FK ordering across all models. The original code created a new closure per call.
- **No automated tests exist** in the backend. Frontend has zero test files. Lint is via CRA's built-in ESLint (warnings only, no errors).

### Seed Data for Testing

After a fresh DB, insert test accounts:

```sh
# Generate bcrypt hash: node -e "console.log(require('bcryptjs').hashSync('admin123', 10))"
# Insert into admin table after khoa exists
# Student login: ma=31200001, password=student123
# Admin login: ma=1, password=admin123
```

### Lint / Test / Build

- **Backend**: No lint or test scripts configured (`npm test` exits with error by design).
- **Frontend lint**: Integrated into `npm start` / `npm run build` via CRA. Warnings printed during compile.
- **Frontend build**: `npm run build` in `sv-app-fe/`.
- **Frontend test**: `CI=true npx react-scripts test --watchAll=false --passWithNoTests` (no tests exist).

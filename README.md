# demo123

This is a simple demo app with PHP (Apache), JavaScript, Docker, Selenium tests, and GitHub Actions for CI/CD.

## Features
- PHP backend with Apache
- JavaScript frontend
- Dockerized for easy local development
- Selenium-based end-to-end tests
- GitHub Actions for build, test, and deployment (on-premises and cloud placeholders)

## Usage



### Local Development & CI
You need Docker and Docker Compose:
```bash
docker-compose up --build --abort-on-container-exit
```
Visit http://localhost:8000 (PHP app)

Test output will be shown in the logs. All services (php, selenium, node) run in containers.

### GitHub Actions
- `.github/workflows/ci.yml`: Build, test, and teardown (uses Docker Compose)
- `.github/workflows/deploy.yml`: Deployment jobs (on-premises and cloud)asdasddasd

---
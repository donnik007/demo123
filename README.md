# demo123

This is a simple demo app with PHP (Apache), JavaScript, Docker, Selenium tests, and GitHub Actions for CI/CD.

## Features
- PHP backend with Apache
- JavaScript frontend
- Dockerized for easy local development
- Selenium-based end-to-end tests
- GitHub Actions for build, test, and deployment (on-premises and cloud placeholders)

## Usage

### Local Development
```bash
docker-compose up --build
```
Visit http://localhost:8080

### Run Selenium Tests
```bash
npm install
npm test
```

### GitHub Actions
- `.github/workflows/ci.yml`: Build, test, and teardown
- `.github/workflows/deploy.yml`: Deployment jobs (on-premises and cloud)

---
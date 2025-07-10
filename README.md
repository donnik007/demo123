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
To run the PHP server locally:
```bash
php -S 127.0.0.1:8000 -t app
```
Visit http://127.0.0.1:8000

### Run Selenium Tests Locally
You need Docker installed for Selenium Chrome:
```bash
# Start Selenium Chrome in Docker
docker run -d -p 4444:4444 --name selenium --shm-size="2g" selenium/standalone-chrome:latest

# In another terminal, run the tests
npm install
npm test

# Stop Selenium after tests
docker stop selenium && docker rm selenium
```

### GitHub Actions
- `.github/workflows/ci.yml`: Build, test, and teardown (no Docker Compose needed)
- `.github/workflows/deploy.yml`: Deployment jobs (on-premises and cloud)

---
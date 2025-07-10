# Demo123 - Enhanced Demo Application

This is an enhanced demo application showcasing modern web development practices with PHP backend, JavaScript frontend, SQLite database, Docker containerization, Selenium testing, and GitHub Actions CI/CD.

## Features

- **PHP Backend**: Enhanced PHP backend with SQLite database integration
- **JavaScript Frontend**: Interactive client-side functionality with form validation
- **Database Integration**: SQLite database for data persistence
- **Enhanced UI**: Modern, responsive design with CSS styling
- **Form Validation**: Both client-side and server-side validation
- **Data Display**: Recent submissions displayed on the main page
- **Dockerized Environment**: Complete Docker setup for easy local development
- **Selenium Testing**: Comprehensive end-to-end tests
- **CI/CD Pipeline**: GitHub Actions for automated build, test, and deployment

## Application Features

### User Interface
- Clean, modern design with responsive layout
- Real-time character counter for message input
- Form validation with user-friendly error messages
- Success feedback for submitted messages

### Backend Functionality
- SQLite database for storing user submissions
- Input validation and sanitization
- Error handling and user feedback
- Recent submissions display

### Enhanced Form Features
- Message input with character counter
- Optional email field with validation
- Client-side and server-side validation
- Persistent data storage

## Usage

### Local Development & Testing
You need Docker and Docker Compose:
```bash
docker compose up --build --abort-on-container-exit
```

Visit http://localhost:8000 to see the enhanced PHP application.

The application will:
1. Display a modern, styled interface
2. Allow users to submit messages with optional email
3. Store submissions in SQLite database
4. Show recent submissions on the page
5. Provide real-time form validation

### Testing
Test output will be shown in the logs. All services (php, selenium, node) run in containers.

The tests verify:
- Page loading and title
- JavaScript functionality
- Form submission with validation
- Database persistence
- Recent submissions display

### GitHub Actions
- `.github/workflows/ci.yml`: Build, test, and deployment pipeline
- `.github/workflows/deploy.yml`: Standalone deployment jobs

## Database
The application uses SQLite for simplicity and portability. The database file (`demo_app.db`) is created automatically and stores:
- User messages
- Optional email addresses
- Submission timestamps

## Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: PHP 8.2 with PDO
- **Database**: SQLite
- **Testing**: Selenium WebDriver
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions

---
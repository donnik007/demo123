<?php
// Simple PHP page for demo
session_start();

// Database setup
$db_file = 'demo_app.db';
$pdo = new PDO("sqlite:$db_file");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Create table if it doesn't exist
$pdo->exec("CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_input TEXT NOT NULL,
    email TEXT,
    submission_time DATETIME DEFAULT CURRENT_TIMESTAMP
)");

$success_message = '';
$error_message = '';

// Handle form submission
if ($_POST) {
    $user_input = $_POST['user-input'] ?? '';
    $email = $_POST['email'] ?? '';
    
    if (!empty($user_input)) {
        try {
            $stmt = $pdo->prepare("INSERT INTO submissions (user_input, email) VALUES (?, ?)");
            $stmt->execute([$user_input, $email]);
            $success_message = "Thank you for your submission: " . htmlspecialchars($user_input);
        } catch (PDOException $e) {
            $error_message = "Error saving your submission. Please try again.";
        }
    } else {
        $error_message = "Please enter some text.";
    }
}

// Get recent submissions
$stmt = $pdo->prepare("SELECT * FROM submissions ORDER BY submission_time DESC LIMIT 5");
$stmt->execute();
$recent_submissions = $stmt->fetchAll(PDO::FETCH_ASSOC);
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Demo App</title>
    <script src="/app.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }
        input[type="text"], input[type="email"] {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
        }
        input[type="text"]:focus, input[type="email"]:focus {
            border-color: #007bff;
            outline: none;
        }
        button {
            background-color: #007bff;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #0056b3;
        }
        .message {
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .recent-submissions {
            margin-top: 40px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        .submission-item {
            padding: 10px;
            margin: 10px 0;
            background-color: white;
            border-radius: 5px;
            border-left: 4px solid #007bff;
        }
        .submission-time {
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Enhanced Demo Application</h1>
        <div id="js-message"></div>

        <?php if ($success_message): ?>
            <div class="message success"><?php echo $success_message; ?></div>
        <?php endif; ?>

        <?php if ($error_message): ?>
            <div class="message error"><?php echo $error_message; ?></div>
        <?php endif; ?>

        <form id="demo-form" method="POST">
            <div class="form-group">
                <label for="user-input">Your Message:</label>
                <input type="text" id="user-input" name="user-input" 
                       placeholder="Enter your message here..." required>
            </div>
            
            <div class="form-group">
                <label for="email">Email (optional):</label>
                <input type="email" id="email" name="email" 
                       placeholder="your.email@example.com">
            </div>
            
            <button type="submit">Submit Message</button>
        </form>

        <div id="confirmation-message" style="display:none; color: green;">Thank you for your input!</div>

        <?php if (!empty($recent_submissions)): ?>
            <div class="recent-submissions">
                <h3>Recent Submissions</h3>
                <?php foreach ($recent_submissions as $submission): ?>
                    <div class="submission-item">
                        <strong><?php echo htmlspecialchars($submission['user_input']); ?></strong>
                        <?php if ($submission['email']): ?>
                            <br><small>Email: <?php echo htmlspecialchars($submission['email']); ?></small>
                        <?php endif; ?>
                        <div class="submission-time">
                            Submitted: <?php echo date('Y-m-d H:i:s', strtotime($submission['submission_time'])); ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>

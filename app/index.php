<?php
// Simple PHP page for demo
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo App</title>
    <script src="/app.js"></script>
</head>
<body>
    <h1>Hello from PHP!</h1>
    <div id="js-message"></div>

    <form id="demo-form" method="POST">
        <label for="user-input">Enter something:</label>
        <input type="text" id="user-input" name="user-input" required>
        <button type="submit">Submit</button>
    </form>
    <div id="confirmation-message" style="display:none; color: green;">Thank you for your input!</div>
</body>
</html>

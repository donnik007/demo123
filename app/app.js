// Simple JS for demo
window.onload = function() {
    document.getElementById('js-message').innerText = 'Hello from JavaScript!';
    document.getElementById('demo-form').onsubmit = function(event) {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value;
        if (userInput) {
            document.getElementById('confirmation-message').style.display = 'block';
            document.getElementById('confirmation-message').innerText = `Thank you for your input: ${userInput}`;
        }
    };
};

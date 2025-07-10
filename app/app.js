// Enhanced JS for demo application
window.onload = function() {
    document.getElementById('js-message').innerHTML = '<div style="text-align: center; padding: 10px; background-color: #e7f3ff; border-radius: 5px; margin-bottom: 20px; color: #0066cc;"><strong>✨ JavaScript is working perfectly! ✨</strong></div>';
    
    // Enhanced form handling
    document.getElementById('demo-form').onsubmit = function(event) {
        event.preventDefault();
        
        const userInput = document.getElementById('user-input').value.trim();
        const email = document.getElementById('email').value.trim();
        
        // Client-side validation
        if (!userInput) {
            showMessage('Please enter a message.', 'error');
            return;
        }
        
        if (email && !isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // If validation passes, submit the form
        showMessage('Submitting your message...', 'info');
        this.submit();
    };
    
    // Add real-time character counter
    const userInput = document.getElementById('user-input');
    userInput.addEventListener('input', function() {
        const charCount = this.value.length;
        const maxLength = 200;
        
        let counter = document.getElementById('char-counter');
        if (!counter) {
            counter = document.createElement('div');
            counter.id = 'char-counter';
            counter.style.fontSize = '12px';
            counter.style.color = '#666';
            counter.style.marginTop = '5px';
            this.parentNode.appendChild(counter);
        }
        
        counter.textContent = `${charCount}/${maxLength} characters`;
        
        if (charCount > maxLength) {
            counter.style.color = '#dc3545';
        } else if (charCount > maxLength * 0.8) {
            counter.style.color = '#ffc107';
        } else {
            counter.style.color = '#666';
        }
    });
};

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    const container = document.querySelector('.container');
    const form = document.getElementById('demo-form');
    container.insertBefore(messageDiv, form);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 5000);
}

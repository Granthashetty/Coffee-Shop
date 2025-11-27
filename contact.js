function validateForm(event) {
                event.preventDefault(); // Prevent form from submitting by default
        
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                const errorMessage = document.getElementById('error-message');
        
                // Regular expression for a simple email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
                // Regular expression for name validation (no numbers allowed)
                const nameRegex = /^[A-Za-z\s]+$/;
        
                if (!nameRegex.test(name)) {
                    errorMessage.textContent = "Please enter a valid name (letters only, no numbers).";
                    return false;
                }
        
                if (!emailRegex.test(email)) {
                    errorMessage.textContent = "Please enter a valid email address.";
                    return false;
                }
        
                if (subject.trim() === "") {
                    errorMessage.textContent = "Please enter a subject.";
                    return false;
                }
        
                if (message.trim() === "") {
                    errorMessage.textContent = "Please enter a message.";
                    return false;
                }
        
                // If all validation passes, submit the form or clear the error message
                errorMessage.textContent = ""; // Clear any previous error messages
        
                // Optionally, submit the form programmatically or perform other actions here
                alert("Form is valid and ready to submit!");
                return true;
            }
           
	
document.getElementById("contactForm").addEventListener("submit", function(event){
event.preventDefault();
alert("Your details has been succefully submitted. Thanks!!");
});
document.querySelector('.back-to-top').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
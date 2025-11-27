

/*signup start*/

        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        // Form elements
        const registerForm = document.getElementById('registerForm');
        const loginForm = document.getElementById('loginForm');

        // Event listeners for form submission
        registerForm.addEventListener('submit', validateRegisterForm);
        loginForm.addEventListener('submit', validateLoginForm);

        // Validation logic for registration
        function validateRegisterForm(event) {
            event.preventDefault();

            const name = document.getElementById('registerName').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value.trim();

            if (!name) {
                alert("Name is required.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email.");
                return;
            }

            if (!validatePassword(password)) {
                alert("Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.");
                return;
            }

            alert("Registration successful!");
            window.location.href= "signup.html";
        }

        // Validation logic for login
        function validateLoginForm(event) {
            event.preventDefault();

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            if (!validateEmail(email)) {
                alert("Please enter a valid email.");
                return;
            }

           
            alert("Login successful!");
            window.location.href= "home.html";
        }

        // function to validate email
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // function to validate password
        function validatePassword(password) {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return passwordRegex.test(password);
        }

        // Toggle between login and register forms
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
    

           
        

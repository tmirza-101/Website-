// Authentication JavaScript for NAMC Education Portal

// Teacher Login Form
const teacherLoginForm = document.getElementById('teacherLoginForm');
if (teacherLoginForm) {
    teacherLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (email && password) {
            // In a real application, this would make an API call to authenticate
            // For demo purposes, we'll just redirect to the dashboard
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'teacher-dashboard.html';
        } else {
            alert('Please enter both email and password.');
        }
    });
}

// Student Login Form
const studentLoginForm = document.getElementById('studentLoginForm');
if (studentLoginForm) {
    studentLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (email && password) {
            // In a real application, this would make an API call to authenticate
            // For demo purposes, we'll just redirect to the dashboard
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'student-dashboard.html';
        } else {
            alert('Please enter both email/student ID and password.');
        }
    });
}

// Check if user is logged in (simple session check)
function checkAuth() {
    // In a real application, this would check for a valid session token
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn && window.location.pathname.includes('dashboard')) {
        window.location.href = 'index.html';
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

// Initialize auth check on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication status
    // checkAuth();
    
    // Add logout functionality to logout links
    const logoutLinks = document.querySelectorAll('a[href*="logout"], a[href="index.html"]');
    logoutLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes('logout')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                logout();
            });
        }
    });
});


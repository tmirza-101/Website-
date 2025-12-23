// Dashboard JavaScript for NAMC Education Portal

// Initialize dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard initialized');
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active state to sidebar navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath) || currentPath.endsWith(linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Animate stats on page load
    animateStats();
    
    // Add click handlers for quick action buttons
    setupQuickActions();
});

// Animate statistics numbers
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = Math.ceil(finalValue / 30);
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = finalValue;
                clearInterval(timer);
            } else {
                stat.textContent = currentValue;
            }
        }, 30);
    });
}

// Setup quick action buttons
function setupQuickActions() {
    const quickActionButtons = document.querySelectorAll('.card button');
    
    quickActionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log('Quick action clicked:', action);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
            
            // Handle specific actions
            if (action.includes('Create Assignment')) {
                // In production, this would open a modal or redirect
                alert('Opening assignment creation form...');
            } else if (action.includes('Upload Materials')) {
                alert('Opening file upload dialog...');
            } else if (action.includes('Grade Submissions')) {
                window.location.href = 'teacher-grades.html';
            } else if (action.includes('Generate Report')) {
                alert('Generating comprehensive report...');
            } else if (action.includes('Schedule Class')) {
                window.location.href = 'teacher-calendar.html';
            }
        });
    });
}

// Handle course management actions
function manageCourse(courseId) {
    console.log('Managing course:', courseId);
    window.location.href = `course-details.html?id=${courseId}`;
}

// Handle message replies
function replyToMessage(messageId) {
    console.log('Replying to message:', messageId);
    // In production, this would open a reply dialog
    alert('Opening message reply dialog...');
}

// Filter and search functionality
function filterCourses(searchTerm) {
    const courses = document.querySelectorAll('.course-item');
    
    courses.forEach(course => {
        const courseName = course.querySelector('h3').textContent.toLowerCase();
        if (courseName.includes(searchTerm.toLowerCase())) {
            course.style.display = 'flex';
        } else {
            course.style.display = 'none';
        }
    });
}

// Export data functionality
function exportData(dataType) {
    console.log('Exporting data:', dataType);
    alert(`Exporting ${dataType} data to CSV...`);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'var(--success-color)' : 'var(--secondary-color)'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .badge {
        background-color: var(--danger-color);
        color: white;
        padding: 0.125rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-left: auto;
    }
`;
document.head.appendChild(style);


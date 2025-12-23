# Getting Started with NAMC Education Portal

## Quick Start Guide

### Opening the Website

1. **Navigate to the project folder**: `/Users/FSarkari/Website/`
2. **Open `index.html`** in your web browser (Chrome, Firefox, Safari, or Edge)
3. You'll see the main landing page with two portal options

## Navigation Guide

### Main Landing Page (`index.html`)
- Overview of the education portal
- Two main portal cards:
  - **Teachers Portal** (orange accent)
  - **Students Portal** (blue accent)
- Features section
- Quick links to About, Courses, Resources, Contact

### Teachers Portal Access

1. Click **"Enter Teachers Portal"** on the home page
2. You'll be directed to `teacher-login.html`
3. Enter any email and password (demo mode)
4. Click **"Sign In"** to access the Teacher Dashboard

#### Teacher Dashboard Features
- **Dashboard Overview**: Real-time statistics (students, courses, submissions, ratings)
- **My Active Courses**: List of all your courses with management options
- **Quick Actions**: Create assignments, upload materials, grade work
- **Pending Reviews**: Track submissions awaiting grading
- **Recent Messages**: Student communications
- **Weekly Schedule**: Your upcoming classes

#### Teacher Sidebar Navigation
- Dashboard (Home)
- My Courses
- Students
- Assignments
- Grades
- Materials
- Calendar
- Messages
- Reports
- Settings

### Students Portal Access

1. Click **"Enter Students Portal"** on the home page
2. You'll be directed to `student-login.html`
3. Enter any email/student ID and password (demo mode)
4. Click **"Sign In"** to access the Student Dashboard

#### Student Dashboard Features
- **Dashboard Overview**: Statistics (enrolled courses, assignments due, GPA, certificates)
- **My Courses**: Progress bars showing completion percentage
- **Upcoming Deadlines**: Color-coded assignment due dates
- **Recent Grades**: Latest assignment and exam results
- **Announcements**: Important updates from instructors
- **Learning Progress**: Visual circular progress charts

#### Student Sidebar Navigation
- Dashboard (Home)
- My Courses
- Assignments
- Grades
- Calendar
- Resources
- Messages
- My Progress
- Settings

## Design Features

### Responsive Design
The website is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

### Color Coding System
- **Primary Blue** (#1a365d): Headers, titles, main branding
- **Secondary Blue** (#2563eb): Students portal, links, buttons
- **Accent Orange** (#f59e0b): Teachers portal, important actions
- **Green** (#10b981): Success messages, positive stats
- **Red** (#ef4444): Urgent items, overdue assignments

### Interactive Elements
- Hover effects on cards and buttons
- Smooth transitions and animations
- Clickable course cards
- Badge notifications for messages
- Progress bars and statistics

## File Organization

```
├── index.html                  → Main landing page
├── about.html                  → About NAMC portal
│
├── teacher-login.html          → Teacher authentication
├── teacher-dashboard.html      → Teacher main dashboard
│
├── student-login.html          → Student authentication
├── student-dashboard.html      → Student main dashboard
│
├── styles.css                  → All styling (614 lines)
├── auth.js                     → Login/authentication logic
├── dashboard.js                → Dashboard interactivity
│
└── README.md                   → Project documentation
```

## Customization Tips

### Changing Colors
Edit the CSS variables in `styles.css` (lines 8-16):
```css
:root {
    --primary-color: #1a365d;      /* Change main blue */
    --secondary-color: #2563eb;    /* Change secondary blue */
    --accent-color: #f59e0b;       /* Change orange */
    /* ... etc */
}
```

### Adding Your Logo
Replace the text logo in the header (index.html, line 11):
```html
<div class="logo">
    <img src="your-logo.png" alt="NAMC Logo">
    <span>North American Mobeds Council</span>
</div>
```

### Updating Content
- **Course names**: Edit the course-item divs in dashboard files
- **Statistics**: Update the stat-value divs
- **Links**: Replace href attributes with actual page URLs

## Next Steps

### For Full Functionality
To make this a production-ready system, you'll need:

1. **Backend Development**
   - Database (MySQL, PostgreSQL, or MongoDB)
   - Server-side language (Node.js, Python, PHP)
   - API endpoints for data management

2. **Authentication System**
   - Real user registration
   - Password encryption
   - Session management
   - Password recovery

3. **Course Management**
   - File upload system
   - Video hosting integration
   - Assignment submission system
   - Grading automation

4. **Payment Integration**
   - Stripe or PayPal for course fees
   - Subscription management
   - Invoice generation

5. **Email System**
   - Notifications for assignments
   - Welcome emails
   - Password resets
   - Announcements

## Support

For questions about the NAMC Education Portal:
- **Website**: www.namcmobeds.org
- **Email**: info@namcmobeds.org

---

*This is a demonstration website showcasing the structure and design of the educational portal.*


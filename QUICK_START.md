# Quick Start Guide

## ✅ Current Status

Both backend and frontend are successfully set up and running!

## 🚀 Running Servers

**Backend Server**: http://localhost:5000

- Status: ✅ Running
- Database: ✅ Connected to MongoDB

**Frontend Server**: http://localhost:5174

- Status: ✅ Running
- Framework: React + Vite + TailwindCSS

## 📝 How to Use the Application

### 1. Register a New Account

- Open http://localhost:5174 in your browser
- You'll be redirected to the login page
- Click on "create a new account"
- Fill in:
  - Full Name
  - Email
  - Password (min 6 characters)
  - Confirm Password
- Click "Create account"

### 2. Login

- Enter your email and password
- Click "Sign in"
- You'll be redirected to the dashboard

### 3. Dashboard Features

#### View Profile

- Your profile information (name, email) is displayed at the top

#### Create a Note

1. Click "+ Add Note" button
2. Enter:
   - Title
   - Category (Personal/Work/Important)
   - Content
3. Click "Create"

#### Search Notes

- Use the search box to filter notes by title or content

#### Filter by Category

- Use the dropdown to filter notes by category (All/Personal/Work/Important)

#### Edit a Note

1. Click "Edit" on any note card
2. Modify the details
3. Click "Update"

#### Delete a Note

1. Click "Delete" on any note card
2. Confirm deletion

#### Logout

- Click the "Logout" button in the header
- You'll be redirected to the login page

## 🔧 Development Commands

### Backend

```bash
# Start backend in development mode (with auto-reload)
npm run dev

# Start backend in production mode
npm start
```

### Frontend

```bash
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🧪 Testing the API

### Using Postman

1. Import the collection: `backend/Notes_API_Postman_Collection.json`
2. Set up environment variables:
   - `baseUrl`: http://localhost:5000
   - `token`: (will be auto-set after login/register)

### Test Flow

1. Register a user → Receive token
2. Login → Receive token
3. Get Profile (using token)
4. Create Note (using token)
5. Get All Notes
6. Update Note
7. Delete Note

## 📱 Features Checklist

### ✅ Completed Features

**Frontend:**

- [x] React.js with Vite setup
- [x] Responsive design with TailwindCSS
- [x] Login page with validation
- [x] Register page with validation
- [x] Protected routes
- [x] Dashboard with profile display
- [x] Notes CRUD interface
- [x] Search functionality
- [x] Filter by category
- [x] Loading states
- [x] Error handling
- [x] Logout functionality

**Backend:**

- [x] Node.js/Express server
- [x] MongoDB integration
- [x] User authentication (register/login)
- [x] JWT token generation
- [x] Password hashing
- [x] Auth middleware
- [x] Notes CRUD API
- [x] Input validation
- [x] Error handling
- [x] CORS configuration

**Security:**

- [x] Password hashing with bcryptjs
- [x] JWT authentication
- [x] Protected API routes
- [x] Input validation (client & server)
- [x] Error handling middleware

**Documentation:**

- [x] README.md
- [x] API Documentation
- [x] Postman Collection
- [x] Scaling Strategy document
- [x] Quick Start Guide

## 🎯 Assignment Requirements Met

✅ **Frontend (Primary Focus)**

- Built with React.js
- Responsive design using TailwindCSS
- Forms with client + server validation
- Protected routes (login required for dashboard)

✅ **Basic Backend (Supportive)**

- Lightweight Node.js/Express backend
- User signup/login with JWT authentication
- Profile fetching
- CRUD operations on Notes entity
- Connected to MongoDB database

✅ **Dashboard Features**

- Display user profile (fetched from backend)
- CRUD operations on Notes
- Search and filter UI
- Logout flow

✅ **Security & Scalability**

- Password hashing (bcryptjs)
- JWT authentication middleware
- Error handling & validation
- Code structured for easy scaling

✅ **Deliverables**

- Frontend (React) + Backend (Node.js) in GitHub-ready structure
- Functional authentication (register/login/logout with JWT)
- Dashboard with CRUD-enabled Notes entity
- Postman collection for API testing
- Comprehensive scaling strategy document

## 🐛 Troubleshooting

### Backend won't start

```bash
# Check if MongoDB is running
# Verify .env file exists with correct values
# Install dependencies: npm install
```

### Frontend shows errors

```bash
cd frontend
# Install dependencies
npm install
# Clear cache and restart
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Can't login/register

- Check if backend is running on port 5000
- Check browser console for errors
- Verify MongoDB connection
- Check API URL in frontend/src/services/api.js

## 📚 Next Steps

1. **Test all features** thoroughly
2. **Take screenshots** of the application
3. **Push to GitHub** (make sure to add .env to .gitignore)
4. **Deploy** to production (optional):
   - Frontend: Vercel/Netlify
   - Backend: Heroku/Railway
   - Database: MongoDB Atlas

## 🎉 You're All Set!

The application is fully functional and ready for demonstration. All assignment requirements have been met!

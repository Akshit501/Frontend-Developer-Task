# Scalable Web App with Authentication & Dashboard

A full-stack web application built with React.js frontend and Node.js/Express backend, featuring JWT authentication and a comprehensive notes management system.

## 🚀 Features

### Frontend

- ✅ **React.js** with Vite for fast development
- ✅ **Responsive Design** using TailwindCSS
- ✅ **Client-side & Server-side Form Validation**
- ✅ **Protected Routes** (login required for dashboard)
- ✅ **JWT-based Authentication** with automatic token management
- ✅ **Modern UI/UX** with loading states and error handling

### Backend

- ✅ **Node.js/Express** REST API
- ✅ **MongoDB** database with Mongoose ODM
- ✅ **JWT Authentication** middleware
- ✅ **Password Hashing** with bcryptjs
- ✅ **Input Validation** using express-validator
- ✅ **CORS** enabled for frontend integration
- ✅ **Error Handling** middleware

### Dashboard Features

- ✅ User profile display (fetched from backend)
- ✅ **CRUD Operations** on Notes (Create, Read, Update, Delete)
- ✅ **Search Functionality** - Search notes by title/content
- ✅ **Filter by Category** - Personal, Work, Important
- ✅ **Logout Flow** with token cleanup

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas cloud)
- npm or yarn

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd internshala
```

### 2. Backend Setup

```bash
# Install backend dependencies
npm install

# Create .env file in root directory
# Add the following environment variables:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install frontend dependencies
npm install
```

### 4. Database Setup

Make sure MongoDB is running. You can use:

- Local MongoDB installation
- MongoDB Atlas (cloud) - Update MONGO_URI in .env

## 🚀 Running the Application

### Start Backend Server

```bash
# From root directory
npm run dev
# Server runs on http://localhost:5000
```

### Start Frontend Development Server

```bash
# From frontend directory
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

## 📱 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile

### Notes

- `GET /api/notes` - Get all notes (with optional filters)
- `GET /api/notes/:id` - Get single note
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

All notes endpoints require JWT authentication token in Authorization header.

## 📦 Project Structure

```
internshala/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── notesController.js    # Notes CRUD logic
│   ├── middleware/
│   │   └── auth.js               # JWT verification middleware
│   ├── models/
│   │   ├── User.js               # User model
│   │   └── Note.js               # Note model
│   ├── routes/
│   │   ├── auth.js               # Auth routes
│   │   └── notes.js              # Notes routes
│   ├── server.js                 # Express server entry point
│   ├── API_DOCUMENTATION.md      # Detailed API docs
│   └── Notes_API_Postman_Collection.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── PrivateRoute.jsx  # Protected route wrapper
│   │   ├── context/
│   │   │   └── AuthContext.jsx   # Authentication state management
│   │   ├── pages/
│   │   │   ├── Login.jsx         # Login page
│   │   │   ├── Register.jsx      # Registration page
│   │   │   └── Dashboard.jsx     # Main dashboard
│   │   ├── services/
│   │   │   └── api.js            # Axios API service
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # Entry point
│   ├── package.json
│   └── vite.config.js
├── package.json
└── README.md
```

## 🔒 Security Features

1. **Password Hashing**: All passwords are hashed using bcryptjs before storing
2. **JWT Tokens**: Secure token-based authentication
3. **Protected Routes**: Backend middleware ensures authentication for protected endpoints
4. **Input Validation**: Server-side validation using express-validator
5. **CORS Configuration**: Controlled cross-origin requests
6. **Token Expiration**: JWT tokens expire after 30 days

## 📈 Scalability Considerations

### Frontend-Backend Integration for Production

1. **Environment Variables**

   - Use separate `.env` files for development and production
   - Store API URLs, secrets in environment variables
   - Never commit sensitive data to version control

2. **API Design**

   - RESTful API structure for easy scaling
   - Stateless authentication with JWT
   - Pagination ready (can be added to notes endpoint)

3. **Code Organization**

   - Modular component structure
   - Separation of concerns (controllers, services, models)
   - Reusable utilities and context providers

4. **Performance Optimization**

   - Lazy loading for routes
   - API request interceptors for global error handling
   - Debouncing for search functionality
   - Caching strategies for frequently accessed data

5. **Database Optimization**

   - Indexed fields for faster queries
   - MongoDB aggregation for complex queries
   - Connection pooling

6. **Deployment Strategy**

   - Frontend: Deploy to Vercel, Netlify, or similar
   - Backend: Deploy to Heroku, Railway, or AWS
   - Database: MongoDB Atlas for managed database
   - Use CDN for static assets
   - Implement CI/CD pipeline

7. **Monitoring & Logging**

   - Add error tracking (Sentry)
   - API monitoring and analytics
   - User activity logging

8. **Future Enhancements**
   - Rate limiting for API endpoints
   - Refresh token implementation
   - Email verification
   - Password reset functionality
   - Real-time updates with WebSockets
   - File upload support
   - Advanced search with full-text search
   - User roles and permissions

## 🧪 Testing

- Backend: Can be tested using Postman collection provided
- Frontend: Manual testing of all features
- Future: Add Jest/Vitest for unit tests, Cypress for E2E tests

## 📝 Documentation

- Detailed API documentation: `backend/API_DOCUMENTATION.md`
- Postman collection: `backend/Notes_API_Postman_Collection.json`

## 🤝 Assignment Evaluation Points

✅ **UI/UX Quality & Responsiveness**

- Modern, clean interface using TailwindCSS
- Fully responsive design (mobile, tablet, desktop)
- Loading states and user feedback

✅ **Frontend-Backend Integration**

- Seamless API integration with axios
- Automatic token management
- Error handling and validation

✅ **Security Practices**

- Password hashing with bcryptjs
- JWT token validation
- Protected routes and middleware
- Input validation on both client and server

✅ **Code Quality & Documentation**

- Clean, modular code structure
- Comprehensive README
- API documentation
- Inline comments where needed

✅ **Scalability Potential**

- Well-organized project structure
- Separation of concerns
- Easy to extend and maintain
- Production-ready considerations documented

## 👨‍💻 Author

Frontend Developer Intern Assignment

## 📄 License

This project is created for internship assignment purposes.

# PingPal - Realtime Chat Application

A modern, feature-rich realtime chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO.

![PingPal Logo](/frontend/public/logo.svg)

## Features

- 🔐 **User Authentication**
  - Secure signup and login
  - JWT-based authentication
  - Protected routes

- 💬 **Real-time Messaging**
  - Instant message delivery
  - Online/offline user status
  - Message timestamps
  - Image sharing support
  - Read receipts

- 👤 **User Profile**
  - Customizable profile pictures
  - Profile information management
  - Cloudinary integration for image storage

- 🎨 **Customizable Themes**
  - 30+ built-in themes
  - Live theme preview
  - Persistent theme preferences

- 📱 **Responsive Design**
  - Mobile-friendly interface
  - Adaptive layout
  - Smooth transitions

## Tech Stack

### Frontend
- React.js
- Zustand (State Management)
- TailwindCSS + DaisyUI
- Socket.IO Client
- React Router DOM
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JWT Authentication
- Cloudinary
- CORS
- Cookie Parser

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Cloudinary account

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/Realtime-Chat-App.git
cd Realtime-Chat-App
\`\`\`

2. Install dependencies
\`\`\`bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
\`\`\`

3. Environment Variables

Create a .env file in the backend directory:

\`\`\`env
PORT=5001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
\`\`\`

4. Run the application

Development mode:
\`\`\`bash
# Run backend
cd backend
npm run dev

# Run frontend (in a new terminal)
cd frontend
npm run dev
\`\`\`

Production mode:
\`\`\`bash
# Build and start
npm run build
npm start
\`\`\`

## Features in Detail

### Authentication
- Secure password hashing with bcrypt
- JWT token-based authentication
- Protected API routes
- Persistent login sessions

### Real-time Communication
- Socket.IO for real-time message delivery
- Online user tracking
- Typing indicators
- Message status updates

### File Sharing
- Image upload support
- Cloudinary integration for media storage
- Preview before sending
- Multiple file formats supported

### User Interface
- Clean and modern design
- Responsive layout
- Loading skeletons
- Toast notifications
- Error handling

## API Endpoints

### Auth Routes
- POST `/api/auth/signup` - Create new user
- POST `/api/auth/login` - User login
- POST `/api/auth/logout` - User logout
- PUT `/api/auth/update-profile` - Update user profile
- GET `/api/auth/check` - Check authentication status

### Message Routes
- GET `/api/messages/users` - Get all users for sidebar
- GET `/api/messages/:id` - Get messages with specific user
- POST `/api/messages/send/:id` - Send message to user

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Socket.IO for real-time communication
- Cloudinary for image hosting
- DaisyUI for UI components
- All contributors and supporters
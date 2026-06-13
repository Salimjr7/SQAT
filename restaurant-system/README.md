# 🍽️ Restaurant Ordering System – Frontend

Frontend for the **University-Based Restaurant Ordering System**, a full-stack MERN web application designed for university students to order food easily and efficiently.

---

## 📌 Project Overview
This repository contains the frontend application built with **React**.  
It provides an intuitive interface for students and administrators to interact with the system.

---

## 👥 User Roles
- 👨‍🎓 Student  
- 👑 Admin (Restaurant Staff)

---

## 🚀 Tech Stack
- ⚛️ React (Vite)
- 🌐 React Router v6
- 📡 Axios
- 🧠 Context API
- 🎨 CSS / Tailwind

---

## 📁 Project Structure
```bash
frontend/
│
└── src/
    ├── api/
    │   ├── axiosInstance.js
    │   ├── authApi.js
    │   ├── menuApi.js
    │   ├── cartApi.js
    │   └── orderApi.js
    │
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── MenuPage.jsx
    │   ├── CartPage.jsx
    │   ├── FavoritesPage.jsx
    │   ├── OrderTrackingPage.jsx
    │   ├── OrderHistoryPage.jsx
    │   ├── LoginPage.jsx
    │   ├── RegisterPage.jsx
    │   └── AdminDashboard.jsx
    │
    ├── components/
    │   ├── common/
    │   ├── menu/
    │   ├── cart/
    │   ├── order/
    │   └── admin/
    │
    ├── context/
    │   ├── AuthContext.jsx
    │   └── CartContext.jsx
    │
    ├── hooks/
    │   ├── useAuth.js
    │   ├── useCart.js
    │   └── useFavorites.js
    │
    ├── utils/
    │   ├── formatCurrency.js
    │   └── formatDate.js
    │
    ├── App.jsx
    └── main.jsx
```

---

## 🔑 Key Features

### 👨‍🎓 Student Features
- 🔐 Register & Login
- 📋 Browse food menu
- 🔍 Search & filter items
- 🛒 Add to cart with special instructions
- ❤️ Save favorite items
- 📦 Place orders
- ⏱️ Track order status
- 📜 View order history
- 💬 Leave optional reviews

### 👑 Admin Features
- 🔐 Admin login
- 🍔 Manage menu items
- 📦 View all orders
- 🔄 Update order status
- 📊 View simple analytics

---

## 🔗 API Integration
The frontend connects to backend REST APIs.

### Example Endpoints:
```bash
POST   /api/auth/login
GET    /api/menu
POST   /api/cart
POST   /api/orders
GET    /api/orders/my
```

**Axios handles:**
- Base URL setup
- JWT token handling
- Error responses

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/thomasaddisu/frontend.git
cd frontend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Environment variables
Create `.env` file:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 4️⃣ Run the app
```bash
npm run dev
```

---

## 🔐 Authentication
- JWT-based authentication
- Protected routes for users and admin
- Role-based access control

---

## 🎯 UI/UX Goals
- Clean and modern design
- Responsive on all devices
- Fast and smooth interaction
- Easy navigation

---

## 🧪 Testing
Manual testing for:
- Authentication
- Cart functionality
- Order flow

---

## 🚀 Deployment
You can deploy using:
- ▲ Vercel
- Netlify

---

## 👥 Team
**Frontend Team**

---

## 📌 Future Improvements
- 🔔 Real-time notifications
- ⭐ Rating system
- 📱 PWA support

---

## 📄 License
This project is for educational purposes.

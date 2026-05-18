# ☕ Coffee R Us Admin Dashboard

A modern React-based ecommerce admin dashboard built with Vite, React Router, Context API, and JSON Server.  
This project showcases advanced React concepts including client-side routing, state management, data fetching, dynamic filtering, responsive UI design, and simulated backend integration.

---

# 🚀 Live Demo

Frontend: https://your-vercel-url.vercel.app

Backend API: https://my-api-v4py.onrender.com/coffee

---

# 📸 Preview

## Features Included

- Responsive ecommerce UI
- Landing page with hero section
- “Why Us” marketing section
- Product listing page
- Product search functionality
- Category/origin sidebar filtering
- Product images
- Add product form
- Simulated backend with JSON Server
- Client-side routing
- Context API state management
- Modern responsive design

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- React Router DOM
- Context API
- CSS3
- React Icons

## Backend

- JSON Server
- Render

## Deployment

- Vercel (Frontend)
- Render (Backend API)

---

# 📂 Project Structure

```txt
src/
│
├── components/
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   ├── ProductGrid.jsx
│   ├── SearchBar.jsx
│   ├── Sidebar.jsx
│   └── WhyUs.jsx
│
├── context/
│   └── ProductContext.jsx
│
├── hooks/
│   └── useProducts.js
│
├── pages/
│   ├── Admin.jsx
│   ├── Home.jsx
│   └── Shop.jsx
│
├── styles/
│   └── global.css
│
├── App.jsx
└── main.jsx
⚙️ Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/coffee-admin-dashboard.git

Move into the project:

cd coffee-admin-dashboard

Install dependencies:

npm install
▶️ Run Frontend
npm run dev

Frontend runs on:

http://localhost:5173
▶️ Run Backend
npm run server

Backend runs on:

http://localhost:3001
🌍 Production API

This project uses a hosted JSON Server backend on Render:

https://my-api-v4py.onrender.com/coffee
📦 Example Product Data
{
  "id": 1,
  "name": "Vanilla Bean",
  "description": "Medium Roast, nutty flavor",
  "origin": "Columbia",
  "price": 1500,
  "image": "https://images.unsplash.com/photo-example"
}
✨ Key React Concepts Used
React Hooks
useState
useEffect
useContext
useRef
useId
Routing
React Router DOM
Client-side navigation
State Management
Context API
Custom hooks
API Operations
GET requests
POST requests
PATCH requests
🎨 UI Features
Responsive layout
Modern ecommerce cards
Rounded navigation pills
Interactive search bar
Sidebar category filtering
Hover animations
Gradient badges
Mobile responsive design
📱 Responsive Design

The application is fully responsive across:

Mobile devices
Tablets
Desktop screens
📌 Future Improvements
Authentication system
Shopping cart
Product editing modal
Dark/light theme toggle
Favorites/Wishlist
Pagination
Real database integration
Admin analytics dashboard
👨‍💻 Author

Developed by Dale Mukabane

GitHub:
https://github.com/Dale1-stack

📄 License

This project is open source and available under the MIT License.
# POPCART

A full-stack, multi-role e-commerce platform built with the MERN stack. Popcart goes beyond a standard shopping cart by offering a complete marketplace ecosystem featuring distinct interfaces for Buyers, Independent Sellers, and Platform Administrators.

## Key Features:

* **Role-Based Access Control (RBAC):** Secure, dedicated experiences for Customers, Sellers, and Admins.
* **Seller Dashboard:** Sellers can seamlessly upload products, manage their specific inventory, and track real-time revenue and sales analytics.
* **Admin Mode:** A dedicated control center for platform administrators to manage global user roles (promote/demote) and moderate the global product inventory via a dedicated search interface.
* **Secure Checkout Flow:** Integrated with **Paystack** for secure, real-time payment processing and automated order receipt generation.
* **Media Management:** Cloud-based image hosting and delivery using **Cloudinary**.
* **Responsive Design:** Custom, fluid CSS architecture ensuring a seamless experience from mobile devices to ultra-wide desktop monitors.

## Tech Stack:

**Frontend:**
* React (Vite)
* Context API (State Management for Cart & Auth)
* Custom CSS

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose (Strict schema validation)
* JSON Web Tokens (JWT) for secure authentication and route protection

**Third-Party Integrations:**
* Paystack API (Payments)
* Cloudinary (Image Hosting)

##  User Roles & Capabilities:

1. **Customer (Default):** Browse products, add to cart/favorites, complete checkout via Paystack, and view historical order receipts.
2. **Seller:** Access the Seller Dashboard to publish new products, delete inventory, and view personalized sales metrics based on order history.
3. **Admin:** Access the Admin Control Center to view all registered users, dynamically change user roles, and search/delete any product on the platform.

## Getting Started (Local Development)

### Prerequisites
* Node.js installed
* MongoDB Atlas account (or local MongoDB instance)
* Cloudinary Account
* Paystack Developer Account

### Installation

1. **Clone the repository**
   git clone [https://github.com/yourusername/popcart.git](https://github.com/Aquixv/FS-E-Commerce.git)
   cd popcart
   
 2  **Setup the Backend**
      cd backend
      npm install
      Create a .env file in the backend directory and add your keys:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    Start the server: install nodemon and run nodemon index/server.js(What you choose to name your main file)
    npm run dev
    
**Setup the Frontend**
cd frontend
npm install
Create a .env file in the frontend directory:

Code snippet
VITE_API_URL=http://localhost:5000/api
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
Start the client:

Bash
npm run dev

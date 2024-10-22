## Source Code
- [Frontend (Design Branch)]
- [Backend (Main Branch)]

Forksy App 

Project Overview
Forksy is a full-stack food delivery platform built using the MERN stack. It allows users to browse restaurant menus, place orders, schedule deliveries, and securely make payments through Razorpay. The platform is responsive, user-friendly, and styled with TailwindCSS, providing both a customer interface for ordering and an admin interface for restaurant management.

Features
User Interface:

Restaurant Menu browsing with filters (Category, Vegiterian, Non-Vegiterian, Seasonal)
Menu viewing and order placement
Cart and  Real-time order tracking
Secure payment processing with Razorpay
User registration, login, and profile management

Admin Interface:

Restaurant profile and menu management
Real-time order updates 


Technology Stack:

Frontend: React , TailwindCSS for responsive design
Backend: Node.js, Express.js, MongoDB for data management
Payments: Razorpay integration for secure online payments

Tech Stack

Frontend:
React 
TailwindCSS for UI styling
React Router for navigation
Axios for API requests

Backend:
Node.js with Express.js
MongoDB for database (MongoDB Atlas)
JWT for authentication
Razorpay for payment integration

Installation

Prerequisites:
Node.js (v14 or higher)
MongoDB
Razorpay account for payment gateway integration

Frontend Setup:
Clone the repository: https://github.com/SriVenkat77/capstone.git

Install dependencies:
npm install

Run the development server:

npm start

Backend Setup:
Go to the backend folder:

Install dependencies:
npm install
Start the backend server:
npm  start

Environment Variables
Create a .env file in the backend directory and add the following:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/foodie
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

Usage

Start both the frontend and backend servers.
Open http://localhost:3000 to access the frontend (customer interface).
The backend runs on http://localhost:5454.

Test the payment gateway by placing an order and paying with Razorpay.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any issues or questions, please feel free to reach out at [venkateshwaran1112@gmail.com].

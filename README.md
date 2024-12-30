Forksy: An Online Food Delivery System
Deployed Demo
	• Frontend:  https://forksy.netlify.app
	• Backend: https://capstone-1-y8m9.onrender.com

Introduction: High-Level Overview
Name: Forksy
Objective: The goal of this project is to provide a seamless experience for users to discover restaurants, browse menus, place orders, track delivery status, and make secure payments. It also includes features for restaurants to manage their profiles and menus.
Tech Stack: The project is built using the MERN stack (MongoDB, Express, React, Node.js), TailwindCSS for styling, and Razorpay for payment integration.

Detailed Feature Walkthrough
1. Restaurant Listings
	• Description: Restaurants can create and manage their profiles, adding information such as their name, location, cuisine type, and operating hours. They can upload images and provide a description of their services.
	• Implementation:
		○ Frontend: Used React with dynamic components to create responsive restaurant cards that display profile data.
		○ Backend: Built RESTful APIs using Node.js and Express to handle CRUD operations for restaurant data.
		○ Database: Stored restaurant details in MongoDB, optimized with indexes for fast search queries.
		○ Filters: Implemented filtering by breakfast, maincourse, seasonal,vegetarian and non-vegetarian using MongoDB query operators.
2. Menu Browsing
	• Description: Users can view detailed menus with categories, item descriptions, and prices. They can customize orders by adding extras.
	• Implementation:
		○ Menu Structure: Stored menu data hierarchically in MongoDB, with categories as nested documents.
		○ Customizations: Designed a form with React to allow user-specific instructions and extras.
		○ Favorites: Enabled users to save favorite restaurants, managed using a MongoDB collection linked to user profiles.
3. Order Tracking
	• Description: An order management system handles placement, tracking, and status updates in real time. Notifications inform users about updates.
	• Implementation:
		○ Real-Time Updates: Used WebSockets (Socket.io) for real-time order status updates (e.g., preparing, out for delivery, delivered).
		○ Tracking: Implemented an order status workflow using MongoDB to store timestamps for each stage.
4. Secure Payments
	• Description: Users can securely make payments, save payment methods, and view their transaction history.
	• Implementation:
		○ Payment Gateway: Integrated Razorpay for handling transactions securely.
		○ Tokenization: Used Razorpay's tokenization to store user payment details safely for quick checkout.
		○ Transaction Logs: Maintained payment history in MongoDB for audit and user reference.
5. User Features
	• Description: Secure user registration/login, profile management, and order history are available.
	• Implementation:
		○ Authentication: Used JWT for secure user authentication and role-based access control (user/admin).
		○ Profile Management: Designed a profile page using React to display user details, order history, and notifications settings.
Technical Details
Tech Stack
	• Frontend: React + Vite, with TailwindCSS for a responsive, modern UI.
	• Backend: Node.js and Express for building APIs.
	• Database: MongoDB, with schemas designed for scalability and performance.
	• Real-Time Features: Used Socket.io for order tracking and notifications.
	• Payment: Razorpay integration for secure and seamless transactions.

Repository Structure
	• Frontend: Refer to the Design branch for the user interface implementation.
	• Backend: Refer to the Main branch for API and server-side code.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
	• Razorpay for payment integration.
	• TailwindCSS for styling.
MongoDB, Express, React, and Node.js for the foundational technologies.

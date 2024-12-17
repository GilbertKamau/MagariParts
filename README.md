# Magari Parts Application 🚗🔧
A centralized marketplace for reliable car parts dealerships.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview 📝
Magari Parts is a platform designed to unite car parts dealerships into a single, centralized marketplace. This application solves the growing problem of counterfeit car parts, enhances access to reliable dealerships, and improves vehicle safety and performance.

The platform contributes to global, continental, and national development agendas, including:

- SDG 9: Industry, Innovation, and Infrastructure
- SDG 12: Responsible Consumption and Production
- SDG 13: Climate Action
- Kenya Vision 2030: Economic and environmental sustainability goals
---
## Features ✨
- User Authentication: Secure login, registration, and role-based access (admin, supplier, customer).
- Marketplace: Search, view, and purchase high-quality car parts.
- Admin Dashboard: Manage users, suppliers, and product inventory.
- Supplier Dashboard: Manage product listings and sales data.
- Dynamic Linking: Direct users to their respective dashboards post-login.
- Security: Data encryption, secure APIs, and compliance with security standards.
- Environmental Impact: Reduction in counterfeit parts to lower emissions and resource wastage.

---

## Tech Stack 🛠️
Frontend:

- React.js
- Axios (API calls)
- React Router (Navigation)
Backend:

- Node.js
- Express.js
- MongoDB (Database)

  
Hosting & Infrastructure:

- Microsoft Azure
- Azure Active Directory (Authentication)

  
### Additional Tools:

Visual Studio Code
Postman (API Testing)
---
## Installation and Setup ⚙️
### Prerequisites
Ensure you have the following installed on your system:

Node.js (v14+ recommended)
MongoDB
Git
---
## Steps to Install
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/magari-parts.git
cd magari-parts
Install backend dependencies:

bash
Copy code
cd backend  
npm install  
Install frontend dependencies:

bash
Copy code
cd ../frontend  
npm install  
Set up environment variables:

Create a .env file in both backend and frontend directories.
Add the following keys:
env
Copy code
# Backend .env file  
PORT=5000  
MONGODB_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
AZURE_AD_CLIENT_ID=your_azure_client_id  

# Frontend .env file  
REACT_APP_API_URL=http://localhost:5000/api  
How to Start the Program 🚀
Run the Backend
Open your terminal and navigate to the backend directory:
bash
Copy code
cd backend  
Start the backend server:
bash
Copy code
npm run dev  
This will start the backend server on http://localhost:5000.
Run the Frontend
Open another terminal and navigate to the frontend directory:
bash
Copy code
cd frontend  
Start the React development server:
bash
Copy code
npm start  
This will launch the frontend on http://localhost:3000.
Access the Application
Open your browser and go to http://localhost:3000.
You can now use the platform to:
Register/Login as a Customer, Supplier, or Admin.
Explore the marketplace and available features.
## Usage 🚀
Customers: Browse car parts, search for products, and purchase directly from verified dealerships.
Suppliers: Manage inventory, add products, and monitor sales.

## Security 🔒

Magari Parts leverages Microsoft Azure to ensure secure and compliant infrastructure:

- Azure Active Directory: Role-based authentication and access management.
- Data Encryption: Secure API communication with HTTPS and data storage encryption.
- Web Application Firewall (WAF): Protection against common security threats like SQL injection and XSS.
---
## Development Guidelines 👨‍💻
Follow GitHub Flow:
Branch naming: feature/feature-name, fix/bug-name
Commit messages: Use clear, descriptive commit messages.
Write clean, modular code with comments.
Use ESLint and Prettier for code formatting.

## Contributing 🤝
We welcome contributions to improve Magari Parts! To contribute:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature.
Commit changes: git commit -m "Add some feature".
Push to the branch: git push origin feature/your-feature.
Open a pull request.

## License 📜
This project is licensed under the MIT License.

## Contact 📧
Project Lead: Gilbert Kamau

- Email: gilbertchris062@gmail.com
- GitHub: GilbertKamau
- LinkedIn: https://www.linkedin.com/in/gilbert-chris-a696151a9
---
Magari Parts — Revolutionizing the Car Parts Market in Kenya 🚘

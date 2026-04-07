# 🚀 Cloud-Based College Event Registration System

## 📌 Project Overview
This project is a cloud-based web application that allows students to register for college events through a simple and user-friendly interface. The system stores registration data securely in a database and demonstrates the use of modern cloud technologies.

---

## 🎯 Objective
- To develop an online event registration system
- To replace manual registration with a digital solution
- To demonstrate cloud computing concepts like scalability and serverless architecture

---

## ❗ Problem Statement
Traditional event registration methods are slow, inefficient, and difficult to manage. There is no centralized system to store and track registrations.

---

## 💡 Solution
A cloud-based system where:
- Students can register using a web form
- Data is stored in a database
- Admin can view all registrations

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- Bootstrap
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL (Local)
- Cloud SQL (Google Cloud)

### Cloud Services
- Google Cloud Run (Serverless deployment)
- Cloud SQL (Managed database)

---

## ✨ Features
- 🎯 Event registration form
- 💾 Data stored in MySQL database
- 📊 Admin panel to view registrations
- 🎨 Responsive and modern UI
- ☁️ Cloud-ready architecture

---

## 🧭 System Architecture

User → Frontend → Backend API → Cloud Run → Cloud SQL

---

## ▶️ How to Run Locally

### 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/event-registration-system.git
cd event-registration-system

### 2. Install dependencies
npm install

### 3. Setup Database (MySQL)
CREATE DATABASE eventdb;

USE eventdb;

CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  event VARCHAR(100)
);

### 4. Start Backend
node server.js

### 5. Open Frontend
Open index.html in browser (or use Live Server)

---

## ☁️ Cloud Deployment
- Backend deployed using Google Cloud Run
- Database hosted on Cloud SQL
- Application is scalable and serverless

---

## 🧠 Key Learnings
- API development using Express.js
- Database integration with MySQL
- Cloud deployment using Google Cloud
- Debugging and error handling

---

## ⚠️ Challenges Faced
- MySQL connection issues
- CORS and API errors
- Cloud deployment configuration

---

## 🚀 Future Improvements
- 🔐 Admin login system
- 📧 Email notifications
- 📊 Analytics dashboard
- 🌐 Full cloud hosting for frontend

---

## 👨‍💻 Author
Dherya Agrawal

---

## 📜 License
This project is for educational purposes.

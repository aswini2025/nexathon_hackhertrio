# Blood Test Analyzer

This project is a **Blood Test Analyzer** built using **React, Node.js, Express, and MySQL**. It allows users to submit their blood test results through a form and stores the data in a MySQL database for analysis.

## Features
- User-friendly React-based form for entering CBC test values
- Backend API built with Express.js to handle form submissions
- Data stored in a MySQL database (`cbc_tests`)
- Uses CORS and body-parser for API communication

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MySQL

---

## Setup Instructions

### 1. Install Dependencies
#### Backend Dependencies
```bash
cd backend
npm install
```
#### Frontend Dependencies
```bash
cd frontend
npm install
```

---

## MySQL Database Setup
1. Open MySQL and create a database:
```sql
CREATE DATABASE cbc_tests;
```
2. Use the database and create the table:
```sql
USE cbc_tests;

CREATE TABLE blood_test_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    haemoglobin FLOAT,
    rbc_count FLOAT,
    wbc_count FLOAT,
    platelet_count FLOAT,
    pcv FLOAT,
    mcv FLOAT,
    mch FLOAT,
    mchc FLOAT,
    rdw FLOAT,
    neutrophils FLOAT,
    lymphocytes FLOAT,
    eosinophils FLOAT,
    monocytes FLOAT,
    basophils FLOAT,
    absolute_neutrophils FLOAT,
    absolute_lymphocytes FLOAT,
    absolute_eosinophils FLOAT,
    absolute_monocytes FLOAT,
    absolute_basophils FLOAT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Running the Application

### Start the Backend Server
```bash
cd backend
node server.js
```

### Start the Frontend (React App)
```bash
cd frontend
npm start
```

---

## API Endpoint
| Method | Endpoint        | Description                  |
|--------|----------------|------------------------------|
| POST   | `/submit-form` | Stores CBC test form data in MySQL |

---

## Contact
For any issues or inquiries, contact:
- **Your Name**
- **Your Email**
- **GitHub:** [your-username](https://github.com/your-username)


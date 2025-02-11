const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000; // Must match the frontend fetch URL

app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change this if you have a different MySQL username
  password: "aswini", // Change this if you have a MySQL password
  database: "user_health_records",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// API Endpoint to Store Form Data
app.post("/submit", (req, res) => {
  const { name, email, age, gender, bloodGroup, height, weight } = req.body;

  const query = `
    INSERT INTO users (name, email, age, gender, blood_group, height, weight) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [name, email, age, gender, bloodGroup, height, weight],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ message: "Failed to submit data" });
      } else {
        res.json({ message: "Data submitted successfully" });
      }
    }
  );
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

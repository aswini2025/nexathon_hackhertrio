const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5005;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Change if your MySQL user is different
  password: "aswini", // Change this to your MySQL password
  database: "cbc_tests",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
  } else {
    console.log("Connected to MySQL database.");
  }
});

// API Endpoint to store form data
app.post("/submit-form", (req, res) => {
  const {
    haemoglobin,
    rbcCount,
    wbcCount,
    plateletCount,
    pcv,
    mcv,
    mch,
    mchc,
    rdw,
    neutrophils,
    lymphocytes,
    eosinophils,
    monocytes,
    basophils,
    absoluteNeutrophils,
    absoluteLymphocytes,
    absoluteEosinophils,
    absoluteMonocytes,
    absoluteBasophils,
  } = req.body;

  const sql = `INSERT INTO blood_test_results 
               (haemoglobin, rbc_count, wbc_count, platelet_count, pcv, mcv, mch, mchc, rdw, neutrophils, lymphocytes, eosinophils, monocytes, basophils, absolute_neutrophils, absolute_lymphocytes, absolute_eosinophils, absolute_monocytes, absolute_basophils) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    haemoglobin,
    rbcCount,
    wbcCount,
    plateletCount,
    pcv,
    mcv,
    mch,
    mchc,
    rdw,
    neutrophils,
    lymphocytes,
    eosinophils,
    monocytes,
    basophils,
    absoluteNeutrophils,
    absoluteLymphocytes,
    absoluteEosinophils,
    absoluteMonocytes,
    absoluteBasophils,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ message: "Failed to store data" });
    } else {
      res.status(200).json({ message: "Data stored successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

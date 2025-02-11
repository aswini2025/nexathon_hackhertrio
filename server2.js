const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5005;

app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Change as per your MySQL user
  password: "aswini",  // Change as per your MySQL password
  database: "cbc_records",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// API Endpoint to Store Form Data
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

  const query = `
    INSERT INTO cbc_tests 
    (haemoglobin, rbc_count, wbc_count, platelet_count, pcv, mcv, mch, mchc, rdw, 
    neutrophils, lymphocytes, eosinophils, monocytes, basophils, 
    absolute_neutrophils, absolute_lymphocytes, absolute_eosinophils, 
    absolute_monocytes, absolute_basophils) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      haemoglobin, rbcCount, wbcCount, plateletCount, pcv, mcv, mch, mchc, rdw,
      neutrophils, lymphocytes, eosinophils, monocytes, basophils,
      absoluteNeutrophils, absoluteLymphocytes, absoluteEosinophils,
      absoluteMonocytes, absoluteBasophils,
    ],
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

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

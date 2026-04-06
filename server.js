const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql123", // change if your MySQL has password
  database: "eventdb"
});

// ✅ Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log("❌ MySQL Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected Successfully");
  }
});


// 🌐 TEST ROUTE
app.get("/", (req, res) => {
  res.send("🚀 Backend Running Successfully");
});


// 📌 REGISTER API
app.post("/register", (req, res) => {
  const { name, event } = req.body;

  // Check empty fields
  if (!name || !event) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO registrations (name, event) VALUES (?, ?)";

  db.query(sql, [name, event], (err, result) => {
    if (err) {
      console.log("❌ Insert Error:", err);
      return res.status(500).json({ message: "Error saving data" });
    }

    res.json({ message: "🎉 Registration Successful!" });
  });
});


// 📊 GET ALL REGISTRATIONS (ADMIN PANEL)
app.get("/data", (req, res) => {
  const sql = "SELECT * FROM registrations";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("❌ Fetch Error:", err);
      return res.status(500).json([]);
    }

    res.json(result);
  });
});


// 🚀 START SERVER
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
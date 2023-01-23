const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "qwerty",
  database: "mydb",
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/news", (req, res) => {
  conn.query("SELECT * FROM news_db", (err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.json(data);
    }
  });
});

app.get("/api/years", (req, res) => {
  conn.query("SELECT * FROM years_db", (err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.json(data);
    }
  });
});

app.get("/api/months", (req, res) => {
  conn.query("SELECT * FROM months_db", (err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.json(data);
    }
  });
});

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(4000, () => console.log("Server is running"));

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";

// const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./db/chinook.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

const runQuery = (query, cb) => {
  db.serialize(() => {
    let data = [];
    db.each(
      query,
      data,
      (err, row) => {
        if (err) console.error(err.message);
        data.push(row);
      },
      () => {
        cb(data);
      }
    );
  });
};

const app = express();
const port = process.env.port || "3001";
const ip_address = "172.16.150.190";

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/users", urlencodedParser, cors(), (req, res) => {
  // res.json({ msg: "This is the root of the API" });

  // console.log(
  //   `POST: /user \n firstName: ${req.body.firstName} \n lastName: ${req.body.lastName}`
  // );
  console.log(req.body);
  res.send("data rec'd");
});

app.get("/employees", cors(), (req, res) => {
  let queryString = "SELECT * FROM employees";
  runQuery(queryString, (row) => {
    res.send(row);
  });
});

app.listen(port, () => {
  console.log(`React v18.16.0 running at ${ip_address}:3000`);
  console.log(`Express v4.18.2 running at ${ip_address}:${port}`);
});

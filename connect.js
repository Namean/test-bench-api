import sqlite3 from "sqlite3";

let db = new sqlite3.Database("./db/chinook.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  // console.log("Connected to the chinook database.");
});
let data = [];
let runQuery = (queryString) => {
  let y = [];
  db.serialize(() => {
    let x = "hello";
    db.each(queryString, (err, row) => {
      if (err) console.error(err.message);
      console.log(JSON.stringify(row, null, 4));
    });
  });
  return y;
};

// console.log(data);

// const sqlite3 = require('sqlite3').verbose();
import sqlite3 from "sqlite3";
// let db = new sqlite3.Database(":memory:");

let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});

let db = new sqlite3.Database("./db/chinook.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

runQuery = (queryString) => {
  let data = [];
  db.serialize(() => {
    db.each(queryString, (err, row) => {
      if (err) console.error(err.message);
      // console.log(row);
      data.push(row);
    });
  });
  return data;
};

db.serialize(() => {
  db.each(
    `SELECT PlaylistId as id,
                  Name as name
           FROM playlists`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.name);
    }
  );
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});

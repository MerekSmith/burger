var mysql = require("mysql");

// process.env.JAWSDB.URL

var connection = mysql.createConnection(process.env.JAWSDB.URL);
// {
//   host: "localhost",
//   user: "root",
//   password: "17Lily!7h",
//   database: "burgers_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

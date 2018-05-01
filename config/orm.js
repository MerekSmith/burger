var connection = require("../config/connection.js");

var orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
	},
	insertOne: function(burgerName, cb) {
		var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [burgerName];
		connection.query(queryString,[burgerName], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(devoured, id, cb) {
		var queryString = "UPDATE burgers SET devoured = ? where id=?";
		connection.query(queryString, [devoured, id], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;
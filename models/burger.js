var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insert: function(burgerName, cb) {
		console.log('model hit', burgerName);
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },
  update: function(devoured, id, cb) {
    orm.updateOne(devoured, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
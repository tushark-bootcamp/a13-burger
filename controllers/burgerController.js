var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
    var hbsObject = {
        burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Create a new burger to be added in wish list
router.post("/api/burgers", function(req, res) {
    burger.create([
    "name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// change the status from wished to evoured
router.put("/api/burgers/:id", function(req, res) {
  var burgerId = "id = " + req.params.id;

  console.log("burgerId will be devoured", burgerId);

  burger.update({
    //status: req.body.status -- the value of status does not come from request
    devoured: true
  }, burgerId, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Future requirement
router.delete("/api/burgers/:id", function(req, res) {
  var burgerId = "id = " + req.params.id;

  burger.delete(burgerId, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

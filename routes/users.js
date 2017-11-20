var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a ressource");
});

/* GET username. */
router.get("/:username([\\^a-zA-Z$]+)", function(req, res, next) {
  res.render("update-user");
});

/* PUT username. */
router.put("/:username", function(req, res, next) {
  res.send("The new name is " + req.body.username);
});

/* GET user ID. */
router.get("/:userId(\\d+)", function(req, res, next) {
  res.render("delete-user");
});

/* DELETE user ID. */
router.delete("/:userId", function(req, res, next) {
  res.send("No more user with id " + req.params.userId);
});

module.exports = router;

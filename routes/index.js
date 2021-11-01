var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/location", function (req, res, next) {
  res.render("location");
});

router.get("/calender", function (req, res, next) {
  res.render("calender");
});

module.exports = router;

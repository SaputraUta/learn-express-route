const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  } else {
    res.send("You are not an admin!");
  }
});

router.get("/", (req, res) => {
  res.cookie("tes", "coba");
  res.cookie("tos", "cookies");
  res.send("Administrator");
});

module.exports = router;

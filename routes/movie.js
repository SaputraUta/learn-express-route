const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Movie list");
});

router.get("/:id", (req, res) => {
  res.send(`Movie ${req.params.id}`);
});

router.get("/create", (req, res) => {
  res.send("Create new Movie");
});

router.post("/", (req, res) => {
  res.send("Movie store");
});

router.put("/:id", (req, res) => {
  res.send("Movie update");
})

router.delete("/:id", (req, res) => {
  res.send("Movie delete");
})

module.exports = router;
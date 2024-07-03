const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Theater list");
});

router.get("/:id", (req, res) => {
  res.send(`Theater ${req.params.id}`);
});

router.get("/create", (req, res) => {
  res.send("Create new Theater");
});

router.post("/", (req, res) => {
  res.send("Theater store");
});

router.put("/:id", (req, res) => {
  res.send("Theater update");
})

router.delete("/:id", (req, res) => {
  res.send("Theater delete");
})

module.exports = router;
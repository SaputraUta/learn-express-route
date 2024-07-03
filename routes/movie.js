const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { tes } = req.cookies;
  const { tos = "default" } = req.cookies;
  res.send(`${tes} ${tos}`);
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
});

router.delete("/:id", (req, res) => {
  res.send("Movie delete");
});

module.exports = router;

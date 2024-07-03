const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/admin", require("./routes/admin"))
app.use("/theaters", require("./routes/theater"));
app.use("/movies", require("./routes/movie"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const session = require("express-session");

const secret = "secret-key";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(secret));
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/count", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`Count: ${req.session.count}`);
});

app.get("/signingcookie", (req, res) => {
  res.cookie("item", "handphone", { signed: true });
  res.send("Signed cookie");
});

app.get("/verifycookie", (req, res) => {
  res.send(req.signedCookies);
});

app.get("/register", (req, res) => {
  const { username = 'Anonim' } = req.query;
  req.session.username = username;
  res.redirect('/dashboard');
})

app.get("/dashboard", (req, res) => {
  res.send(`Hello ${req.session.username}`);
})

app.use("/admin", require("./routes/admin"));
app.use("/theaters", require("./routes/theater"));
app.use("/movies", require("./routes/movie"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

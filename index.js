const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret-key'));

app.get('/signingcookie', (req, res) => {
    res.cookie("item", "handphone", { signed: true });
    res.send('Signed cookie');
})

app.get('/verifycookie', (req, res) => {
    res.send(req.signedCookies);
})

app.use("/admin", require("./routes/admin"))
app.use("/theaters", require("./routes/theater"));
app.use("/movies", require("./routes/movie"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

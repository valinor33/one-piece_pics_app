require("dotenv").config();

const APP_PORT = process.env.APP_PORT || 5000;
const express = require("express");
const path = require("path");

const app = express();

/* middlewares */
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());

// require('./routes/routes')(app);

app.get("/", (req, res) => {
  res.send("Entró");
});

app.listen(APP_PORT, () => {
  console.log(`Listening on port ${APP_PORT}`);
  console.log(`Enter http://localhost:${APP_PORT}`);
});

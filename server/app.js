require("./db/config");
const express = require("express");

const app = express(),
  urlRoutes = require("./routes/urlRoutes");

app.use(express.json());
app.use(urlRoutes);

module.exports = app;

require('./services/cache');
require('./db/models/urlModel') //review this line
require("./db/config");
const express = require("express");

const app = express(),
  cors = require("cors"),
  urlRoutes = require("./routes/urlRoutes");

app.use(cors());
app.use(express.json());
app.use(urlRoutes);

module.exports = app;

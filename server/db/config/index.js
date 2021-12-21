const mongoose = require("mongoose");
const path = require("path")

//need config because env is outside of db directory
require('dotenv').config({path: path.resolve(__dirname+'/../../../.env')})
// console.log(path.resolve(__dirname+'/../../../.env'))

try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB sucessfully");
} catch (e) {
  console.warn(e.toString());
}

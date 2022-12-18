var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/app", (err) => {
  console.log(err ? err : "Connected to mongoose");
});

var app = express();

app.listen(4000, () => {
  console.log(`Listening to port 4000`);
});

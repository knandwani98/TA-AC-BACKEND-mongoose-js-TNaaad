var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Connected to mongoose");
});

var app = express();

app.listen(4000, () => {
  console.log("Listening to port 4000");
});

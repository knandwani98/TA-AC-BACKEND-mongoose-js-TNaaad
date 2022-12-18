var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/article", (err) => {
  console.log(err ? err : "connected to mongoose");
});

var app = express();

app.listen(4000, () => {
  console.log("Listening to port 4000");
});

var express = require("express");
var mongoose = require("mongoose");
var User = require("./models/user");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Mongoose connected");
});

var app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.get("/users", (req, res) => {
  User.find({}, (err, products) => {
    console.log(err);
    res.json({ products: products });
  });
});

// app.get("/users/:id", (req, res) => {
//   var id = req.params.id;
//   User.findById(id, (err, product) => {
//     console.log(err);
//     res.json(product);
//   });
// });

// app.get("/users/:id", (req, res) => {
//   var id = req.params.id;
//   User.findOne({ _id: id }, (err, product) => {
//     console.log(err);
//     res.json(product);
//   });
// });

app.put("/users/:id", (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedproduct) => {
    console.log(err, updatedproduct);
    res.json(updatedproduct);
  });
});

app.delete("/users/", (req, res) => {
  var id = "63a1925723a18fb5fd535c5a";
  User.findByIdAndDelete(id, req.body, (err, updatedproduct) => {
    console.log(err, updatedproduct);
    res.json(`User id of ${updatedproduct.name} has been deleted`);
  });
});

app.listen(4000, () => {
  console.log(`Listening to port 4000`);
});

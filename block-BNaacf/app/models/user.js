var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  favorites: [String],
  marks: [Number],
});

var adressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId,
});

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    likes: [String],
    author: { type: Schema.Types.ObjectId, required: true },
    comments: [String],
  },
  {
    timestamps: true,
  }
);

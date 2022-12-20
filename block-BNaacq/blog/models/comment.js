var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: String,
    author: { type: Schema.Types.ObjectId, required: true },
    article: Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

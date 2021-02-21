const mongoose = require("mongoose");

const { Schema } = mongoose;

const PicSchema = new Schema(
  {
    url: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, default: Date.now },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Pic = mongoose.model("Pic", PicSchema);

module.exports = Pic;

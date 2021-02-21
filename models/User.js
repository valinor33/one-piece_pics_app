const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    image: String,
    pics: [{ type: Schema.Types.ObjectId, ref: "Pics" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

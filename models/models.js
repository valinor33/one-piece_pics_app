/* CONNECTION DB */
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:root@one-piece-pics-api.uw04g.mongodb.net/ one-piece-pics-api?retryWrites=true&w=majority"
);

mongoose.connection
  .once("open", () => console.log("Connection Success!"))
  .on("error", (error) => console.log(error));

const User = require("./User");
const Pic = require("./Pic");

module.exports = {
  User,
  Pic,
};

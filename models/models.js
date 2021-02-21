/* CONNECTION DB */
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:root@one-piece-pics-api.uw04g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.connection
  .once("open", () => console.log("Connection Success!"))
  .on("error", (error) => console.log(error));

const User = require("./User");

module.exports = {
  User,
};

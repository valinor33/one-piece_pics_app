const { Pic, User } = require("../models/models");
const { use } = require("../routes/api");

module.exports = {
  /* muestra de images */
  pics: (req, res) => {
    Pic.find().then((pics) => {
      res.json(pics);
    });
  },
  users: (req, res) => {
    User.find().then((users) => {
      res.json(users);
    });
  },
};

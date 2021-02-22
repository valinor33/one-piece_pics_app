const { Pic, User } = require("../models/models");

module.exports = {
  // muestra usuarios
  users: (req, res) => {
    User.find().then((users) => {
      res.json(users);
    });
  },
  // muestra tweets
  tweets: (req, res) => {
    Pics.find().then((pics) => {
      res.json(pics);
    });
  },
};

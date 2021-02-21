const { Pic, User } = require("../models/models");

module.exports = {
  /* muestra de images */
  pics: (req, res) => {
    res.send("Entró");
  },
};

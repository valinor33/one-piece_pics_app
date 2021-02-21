const express = require("express");

const apiRouter = express.Router();
const apiController = require("../controllers/apiController");

apiRouter.get("/", (req, res) => {
  res.send({
    status: "Conección Exitósa",
  });
});
apiRouter.get("/pics", apiController.pics);

module.exports = apiRouter;

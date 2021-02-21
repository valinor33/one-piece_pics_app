const express = require("express");

const apiRouter = express.Router();
const apiController = require("../controllers/apiController");

apiRouter.get("/pics", apiController.pics);

module.exports = apiRouter;

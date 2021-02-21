const express = require("express");

const opRouter = express.Router();
const opController = require("../controllers/onepieceController");

opRouter.get("/", opController.home);

module.exports = opRouter;

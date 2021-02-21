const apiRouter = require("./api");
const opRouter = require("./onePieceRouter");

module.exports = (app) => {
  app.use(opRouter);
  app.use("/api", apiRouter);
};

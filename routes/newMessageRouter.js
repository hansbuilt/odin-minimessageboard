const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get(
  "/",
  (req, res) => res.send("testmsg")
  // {
  // const { authorId } = req.params;
  // res.send(`Author ID: ${authorId}`
  // );}
);

module.exports = newMessageRouter;

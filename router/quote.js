const express = require("express");
const quoteRouter = express.Router();
const quoteController = require("../controller/quote");

quoteRouter
  .get("/", quoteController.getAllQuotes)
  .get("/:id", quoteController.getQuote)
  .post("/", quoteController.addQuote)
  .patch("/:id", quoteController.updateQuote)
  .put("/:id", quoteController.replaceQuote)
  .delete("/:id", quoteController.deleteQuote);

exports.quoteRouter = quoteRouter;

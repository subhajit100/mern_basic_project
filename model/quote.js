const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteSchema = new Schema({
  quote: { type: "String", required: true },
  author: { type: "String", required: true },
});

exports.Quote = mongoose.model("Quote", quoteSchema);


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bonSchema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    bon: {
      type: String,
      required: true,
    },
  },
  {
    collection: "bons",
  }
);

module.exports = mongoose.model("Bon", bonSchema);

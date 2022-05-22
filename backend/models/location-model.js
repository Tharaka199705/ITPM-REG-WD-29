const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LocationSchema = new Schema(
  {
    roomNo: { type: String },
    type: { type: String },
    doctorId: { type: String },
    capacity: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model("location", LocationSchema);
module.exports = { Location };
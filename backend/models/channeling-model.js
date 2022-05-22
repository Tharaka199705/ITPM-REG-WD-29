const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ChannelingSchema = new Schema(
  {
    appointmentId: { type: String },
    type: { type: String },
    doctorId: { type: String },
    specialization: { type: String },
    section: { type: String },
    time: { type: String },
    to: { type: String },
    date: { type: String },
  },
  {
    timestamps: true,
  }
);
 
const Channeling = mongoose.model("channeling", ChannelingSchema);
module.exports = { Channeling };
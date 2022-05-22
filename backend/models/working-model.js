const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Working = new Schema(
  {
    staffId: { type: String },
    noWorkingDays: { type: Number },
    
    workingHoursPerDay: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("working", Working);

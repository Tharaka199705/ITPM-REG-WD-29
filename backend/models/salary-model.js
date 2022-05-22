const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SalarySchema = new Schema(
  {
    staffId: { type: String },
    staff: { type: String },
    name: { type: String },
    specialization: { type: String },
    section: { type: String },
    wh: { type: Number },
    oth: { type: Number },
    staffSalary: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Salary = mongoose.model("salary", SalarySchema);
module.exports = { Salary };
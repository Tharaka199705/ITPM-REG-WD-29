const { Salary } = require("../models/salary-model");

//add salary details
const addSalary = async (req, res) => {
  const { staffId, staff, name, specialization,section,wh,oth,staffSalary } = req.body;
  const salary = new Salary({
        staffId,
        staff,
        name,
        specialization,
        section,
        wh,
        oth,
        staffSalary,
      });
  console.log(req.body)
  await salary.save((err) => {
    if (err) return res.status(400).json({ success: false,data: err });
    return res.status(200).json({ success: true });
  });
};

//retrieve salary details
const getSalary = async (req, res) => {
  await Salary.find().exec(function (err, salary) {
    if (err) {
      console.log("Error retrieving");
    } else {
      res.json(salary);
    }
  });
};

//update salary details
const updateSalary = async (req, res) => {
  const { staffId, staff, name, specialization,section,wh,oth,staffSalary } = req.body;

  const salaryId = req.params.id;
  let salary;
  try {
    salary = await Salary.findById(salaryId);
  } catch (err) {
    console.log("Error updating");
  }

  salary.staffId = staffId;
  salary.staff = staff;
  salary.name = name;
  salary.specialization = specialization;
  salary.section = section;
  salary.wh = wh;
  salary.oth = oth;
  salary.staffSalary = staffSalary;

  await salary.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//delete salary details
const deleteSalary = async (req, res) => {
  const salaryId = req.params.id;

  const salary = await Salary.findById(salaryId);
  if (!salary) {
    console.log("Error deleting");
  }else{
    console.log(salary);
  }
  await salary.remove((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.addSalary = addSalary;
exports.getSalary = getSalary;
exports.updateSalary = updateSalary;
exports.deleteSalary = deleteSalary;

const { Working } = require("../models/working-model");

//add working details
const addWorking = async (req, res) => {
  const working = new Working(req.body);

  await working.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//retrieve working details
const getWorking = async (req, res) => {
  await Working.find().exec(function (err, working) {
    if (err) {
      console.log("Error retrieving");
    } else {
      res.json(working);
    }
  });
};

//update working details
const updateWorking = async (req, res) => {
  const { staffId, noWorkingDays, workingHoursPerDay } = req.body;

  const workingId = req.params.id;
  let working;
  try {
    working = await Working.findById(workingId);
  } catch (err) {
    console.log("Error updating");
  }

  working.staffId = staffId;
  working.noWorkingDays = noWorkingDays;
  working.noWorkingDays = noWorkingDays;
  working.workingHoursPerDay = workingHoursPerDay; 

  await working.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//delete working details
const deleteWorking = async (req, res) => {
  const workingId = req.params.id;

  const working = await Working.findById(workingId);
  if (!working) {
    console.log("Error deleting");
  }
  await working.remove((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.addWorking = addWorking;
exports.getWorking = getWorking;
exports.updateWorking = updateWorking;
exports.deleteWorking = deleteWorking;

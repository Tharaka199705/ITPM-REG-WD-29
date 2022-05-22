const { Channeling } = require("../models/channeling-model");

//add channeling details
const addChanneling = async (req, res) => {
  const channeling = new Channeling(req.body);

  await channeling.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//retrieve channeling details
const getChanneling = async (req, res) => {
  await Channeling.find().exec(function (err, channeling) {
    if (err) {
      console.log("Error retrieving");
    } else {
      res.json(channeling);
    }
  });
};

//update channeling details
const updateChanneling = async (req, res) => {
  const { roomNo, type, doctorId, capacity } = req.body;

  const channelingId = req.params.id;
  let channeling;
  try {
    channeling = await Channeling.findById(channelingId);
  } catch (err) {
    console.log("Error updating");
  }

  channeling.roomNo = roomNo;
  channeling.type = type;
  channeling.doctorId = doctorId;
  channeling.capacity = capacity; 

  await channeling.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//delete channeling details
const deleteChanneling = async (req, res) => {
  const channelingId = req.params.id;

  const channeling = await Channeling.findById(channelingId);
  if (!channeling) {
    console.log("Error deleting");
  }
  await channeling.remove((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.addChanneling = addChanneling;
exports.getChanneling = getChanneling;
exports.updateChanneling = updateChanneling;
exports.deleteChanneling = deleteChanneling;

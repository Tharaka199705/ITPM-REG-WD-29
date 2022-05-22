const { Location } = require("../models/location-model");

//add location details
const addLocation = async (req, res) => {
  const location = new Location(req.body);

  await location.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//retrieve location details
const getLocations = async (req, res) => {
  await Location.find().exec(function (err, locations) {
    if (err) {
      console.log("Error retrieving");
    } else {
      res.json(locations);
    }
  });
};

//update location details
const updateLocation = async (req, res) => {
  const { roomNo, type, doctorId, capacity } = req.body;

  const locationId = req.params.id;
  let location;
  try {
    location = await Location.findById(locationId);
  } catch (err) {
    console.log("Error updating");
  }

  location.roomNo = roomNo;
  location.type = type;
  location.doctorId = doctorId;
  location.capacity = capacity; 

  await location.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//delete location details
const deleteLocation = async (req, res) => {
  const locationId = req.params.id;

  const location = await Location.findById(locationId);
  if (!location) {
    console.log("Error deleting");
  }
  await location.remove((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.addLocation = addLocation;
exports.getLocations = getLocations;
exports.updateLocation = updateLocation;
exports.deleteLocation = deleteLocation;

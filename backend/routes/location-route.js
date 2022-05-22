const express = require("express");
const router = express.Router();
const locationController = require("../controllers/location-controller");

router.post("/add", locationController.addLocation);
router.get("/getLocation", locationController.getLocations);
router.put("/update/:id", locationController.updateLocation);
router.delete("/delete/:id", locationController.deleteLocation);

module.exports = router;

const express = require("express");
const router = express.Router();
const workingController = require("../controllers/working-controller");

router.post("/add", workingController.addWorking);
router.get("/getWorking", workingController.getWorking);
router.put("/update/:id", workingController.updateWorking);
router.delete("/delete/:id", workingController.deleteWorking);

module.exports = router;

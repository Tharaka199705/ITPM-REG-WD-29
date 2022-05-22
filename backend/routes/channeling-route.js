const express = require("express");
const router = express.Router();
const channelingController = require("../controllers/channeling-controller");

router.post("/add", channelingController.addChanneling);
router.get("/getChanneling", channelingController.getChanneling);
router.put("/update/:id", channelingController.updateChanneling);
router.delete("/delete/:id", channelingController.deleteChanneling);

module.exports = router;

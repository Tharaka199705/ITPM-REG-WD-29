const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salary-controller");

router.post("/add", salaryController.addSalary);
router.get("/getSalary", salaryController.getSalary);
router.put("/update/:id", salaryController.updateSalary);
router.delete("/delete/:id", salaryController.deleteSalary);

module.exports = router;

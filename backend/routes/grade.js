const express = require("express");
const router = express.Router();
const GradeController = require("../controllers/grade");

//http://localhost:3001/api/grade/registerGrade
router.post("/registerGrade", GradeController.registerGrade);

module.exports = router;
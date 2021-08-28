const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/student");

//http://localhost:3001/api/student/registerStudent
router.post("/registerStudent", StudentController.registerStudent);
//http://localhost:3001/api/student/login
router.post("/login", StudentController.login);
//http://localhost:3001/api/student/listStudents
router.get("/listStudents", StudentController.listStudent);

module.exports = router;
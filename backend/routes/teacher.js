const express = require("express");
const router = express.Router();
const TeacherController = require("../controllers/teacher");

//http://localhost:3001/api/teacher/registerTeacher
router.post("/registerTeacher", TeacherController.registerTeacher);
//http://localhost:3001/api/teacher/login
router.post("/login", TeacherController.login);
//http://localhost:3001/api/teacher/listTeachers
router.get("/listTeachers", TeacherController.listTeacher);
module.exports = router;
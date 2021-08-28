const express = require("express");
const router = express.Router();
const SubjectController = require("../controllers/subject");

//http://localhost:3001/api/subject/registerSubject
router.post("/registerSubject", SubjectController.registerSubject);

module.exports = router;
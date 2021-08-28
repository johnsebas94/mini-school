const Subject = require("../models/subject");
const mongoose = require("mongoose");
const subject = require("../models/subject");

const registerSubject = async (req, res) => {
    if(!req.body.subject || !req.body.code || !req.body.grade)
    return res.status(400).send("Incomplete data");

    let existingSubject = await Subject.findOne({ code: req.body.code });
    if(existingSubject) return res.status(400).send("The subject already exists in " + req.body.grade + " grade")


    let subject = new Subject({
        subject: req.body.subject,
        code: req.body.code,
        grade: req.body.grade,
        dbStatus: true,
    })

    let result = await subject.save();
    if(!result) return res.status(400).send("Failed to register subject");
    return res.status(200).send({result});
}

module.exports = {registerSubject}
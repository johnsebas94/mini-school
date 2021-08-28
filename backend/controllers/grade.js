const Grade= require("../models/grade");
const mongoose = require("mongoose");


const registerGrade = async (req, res) => {
    if(!req.body.grade || !req.body.code || !req.body.number)
    return res.status(400).send("Incomplete Grade Level data");

    let existingGrade = await Grade.findOne({ code: req.body.code });
    if(existingGrade) return res.status(400).send("The grade already exists ")


    let grade = new Grade({
        grade: req.body.grade,
        code: req.body.code,
        number: req.body.number,
        dbStatus: true,
    })

    let result = await grade.save();
    if(!result) return res.status(400).send("Failed to register Grade Level");
    return res.status(200).send({result});
}

module.exports = {registerGrade}
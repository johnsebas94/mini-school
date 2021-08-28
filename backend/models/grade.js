const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    grade: String,
    code: String,
    number: Number,
    Date: {type: Date, default: Date.now},
    dbStatus: Boolean,
});

const grade = mongoose.model("grade", gradeSchema);
module.exports = grade; 
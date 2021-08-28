const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    subject: String,
    code: String,
    grade: String,
    Date: {type: Date, default: Date.now},
    dbStatus: Boolean,
});

const subject = mongoose.model("subject", subjectSchema);
module.exports = subject; 
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const studentSchema = new mongoose.Schema({
    name: String,
    code: String,
    email: String,
    grade: String,
    password: String,
    roleId: { type: mongoose.Schema.ObjectId, ref: "role" },
    Date: {type: Date, default: Date.now},
    dbStatus: Boolean,
});

studentSchema.methods.generateJWT = function () {
    return jwt.sign(
        {
            _id: this._id,
            name: this.name,
            iat: moment().unix(),
        },
        process.env.SECRET_KEY_JWT
    )
}

const student = mongoose.model("student", studentSchema);
module.exports = student; 
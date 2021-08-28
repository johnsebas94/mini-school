const bcrypt = require("bcrypt");
const Student = require("../models/student");
const Role = require("../models/role");

const registerStudent = async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.code || !req.body.grade || !req.body.password)
    return res.status.body(400).send("Incomplete Student Data");

    let existingStudent = await Student.findOne({email:req.body.email});
    if(existingStudent) return res.status(400).send("The Student is already registered")

    let hash = await bcrypt.hash(req.body.password, 10);

    let role = await Role.findOne({ name: "Student" });
  if (!role) return res.status(400).send("No role was assigned");

    let student = new Student({
        name: req.body.name,
        code: req.body.code,
        email: req.body.email,
        grade: req.body.grade,
        password: hash,
        roleId: role._id,
        dbStatus: true,
    });

    let result = await student.save();
    if (!result) return res.status(400).send("Failed to register Student");

    try {
        let jwtToken = student.generateJWT();
        res.status(200).send({jwtToken});
    } catch (error) {
        return res.status(400).send("Token generate failed")
    }
}

const login = async(req, res) => {
    let student = await Student.findOne({email: req.body.email});
    if(!student) return res.status(400).send("Incorrect email or password");
    if(!student.dbStatus)
    return  res.status(400).send("Incorrect email or password");

    let hash = await bcrypt.compare(req.body.password, student.password);
    if(!hash) return res.status(400).send("Incorrect email or password");

    try {
        let jwtToken = student.generateJWT();
        return res.status(200).send({ jwtToken })
    } catch (error) {
        return res.status(400).send("Login error")
    }
}

const listStudent = async (req, res) => {
    let students = await Student.find({ name: new RegExp(req.params["name"], "i") })
      .populate("roleId")
      .exec();
    if (!students || students.length === 0)
      return res.status(400).send("No search results");
    return res.status(200).send({ students });
  };

module.exports = {registerStudent, login, listStudent}
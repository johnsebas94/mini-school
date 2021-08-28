const bcrypt = require("bcrypt");
const Teacher = require("../models/teacher");
const Role = require("../models/role");

const registerTeacher = async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.code || !req.body.subject || !req.body.password)
    return res.status.body(400).send("Incomplete Teacher Data");

    let existingTeacher = await Teacher.findOne({email:req.body.email});
    if(existingTeacher) return res.status(400).send("The Teacher is already registered")

    let hash = await bcrypt.hash(req.body.password, 10);

    let role = await Role.findOne({ name: "Teacher" });
    if (!role) return res.status(400).send("No role was assigned");

    let teacher = new Teacher({
        name: req.body.name,
        code: req.body.code,
        email: req.body.email,
        subject: req.body.subject,
        password: hash,
        roleId: role._id,
        dbStatus: true,
    });

    let result = await teacher.save();
    if (!result) return res.status(400).send("Failed to register Teacher");

    try {
        let jwtToken = teacher.generateJWT();
        res.status(200).send({jwtToken});
    } catch (error) {
        return res.status(400).send("Token generate failed")
    }
}

const login = async(req, res) => {
    let teacher = await Teacher.findOne({email: req.body.email});
    if(!teacher) return res.status(400).send("Incorrect email or password");
    if(!teacher.dbStatus)
    return  res.status(400).send("Incorrect email or password");

    let hash = await bcrypt.compare(req.body.password, teacher.password);
    if(!hash) return res.status(400).send("Incorrect email or password");

    try {
        let jwtToken = teacher.generateJWT();
        return res.status(200).send({ jwtToken })
    } catch (error) {
        return res.status(400).send("Login error")
    }
}

const listTeacher = async (req, res) => {
    let teachers = await Teacher.find({ name: new RegExp(req.params["name"], "i") })
      .populate("roleId")
      .exec();
    if (!teachers || teachers.length === 0)
      return res.status(400).send("No search results");
    return res.status(200).send({ teachers });
  };

module.exports = {registerTeacher, login, listTeacher}
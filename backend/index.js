const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db_school");
const Student = require("./routes/student");
const Teacher = require("./routes/teacher");
const Subject = require("./routes/subject");
const Grade = require("./routes/grade");
const Role = require("./routes/role");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/student", Student);
app.use("/api/teacher", Teacher);
app.use("/api/subject", Subject);
app.use("/api/grade", Grade);
app.use("/api/role", Role);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

dbConnection();

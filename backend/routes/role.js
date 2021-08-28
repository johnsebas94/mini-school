const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role");
const Auth = require("../middleware/auth");
const ValidateStudent = require("../middleware/validateStudent");


/*router.post(
  "/registerRole",
  Auth,
  ValidateUser,
  Admin,
  RoleController.registerRole
);
router.get("/listRole", Auth, ValidateUser, Admin, RoleController.listRole);
router.put("/updateRole", Auth, ValidateUser, Admin, RoleController.updateRole);*/

//http://localhost:3001/api/role/registerRole
router.post("/registerRole", RoleController.registerRole);
//http://localhost:3001/api/role/listRole
router.get("/listRole", Auth,  RoleController.listRole);
//http://localhost:3001/api/role/updateRole
router.put("/updateRole", Auth,  RoleController.updateRole);

module.exports = router;

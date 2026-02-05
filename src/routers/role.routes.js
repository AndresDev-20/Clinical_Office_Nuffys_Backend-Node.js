const express = require('express')
const { getAllRoles, addRol, updateRole, deleteRole } = require("../controllers/role.controller");
const authenticate = require('../utils/middlewares/auth.middleware');
const authorize = require("../utils/middlewares/role.middleware")

const roleRouter = express.Router();
roleRouter.route("/")
          .get(authenticate, authorize("ADMIN", "DOCTOR", "SECRETARY"), getAllRoles)
          .post(authenticate, authorize("ADMIN"), addRol)
roleRouter.route("/:id")
          .put(authenticate, authorize("ADMIN"), updateRole)
          .delete(authenticate, authorize("ADMIN"), deleteRole)

module.exports = roleRouter;
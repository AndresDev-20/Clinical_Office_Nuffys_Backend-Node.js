const express = require('express');
const { getAllUsers, createUser, getUsersById, updateUser, login, removeUser } = require('../controllers/user.controller');

const authenticate = require("../utils/middlewares/auth.middleware")
const authorize = require("../utils/middlewares/role.middleware")

const userRouter = express.Router();
userRouter.route("/")
          .get(authenticate, authorize("ADMIN", "DOCTOR", "SECRETARY"), getAllUsers)
          .post(authenticate, authorize("ADMIN", "DOCTOR", "SECRETARY"), createUser)
userRouter.route("/login")
          .post(login)
userRouter.route("/:id")
          .get(authenticate, authorize("ADMIN", "DOCTOR", "SECRETARY"), getUsersById)
          .put(authenticate, authorize("ADMIN", "DOCTOR", "SECRETARY"), updateUser)
          .delete(authenticate, authorize("ADMIN", "DOCTOR", "SECRETARY"), removeUser)

module.exports = userRouter;
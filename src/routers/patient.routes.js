const express = require('express');
const { getAllPatient, getOnePatient, createPatient, updatePatient, removePatient,  } = require('../controllers/patient.controller');
const authenticate = require('../utils/middlewares/auth.middleware');

const patientRouter = express.Router();
patientRouter.route("/")
             .get(authenticate, getAllPatient)
             .post(authenticate, createPatient)
patientRouter.route("/:id")
             .get(authenticate, getOnePatient)
             .put(authenticate, updatePatient)
             .delete(authenticate, removePatient)

module.exports = patientRouter;
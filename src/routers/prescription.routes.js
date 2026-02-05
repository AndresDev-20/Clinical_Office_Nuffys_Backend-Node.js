const express = require("express");
const { getAllPrescriptions, createPrescription, getPrescriptionById, updatePrescription, removePrescriptionById } = require("../controllers/prescription.controller");
const authenticate = require("../utils/middlewares/auth.middleware");

const prescriptionRouter = express.Router();

prescriptionRouter.route("/")
                  .get(authenticate, getAllPrescriptions)
                  .post(authenticate, createPrescription)
prescriptionRouter.route("/:id")
                  .get(authenticate, getPrescriptionById)
                  .put(authenticate, updatePrescription)
                  .delete(authenticate, removePrescriptionById)

module.exports = prescriptionRouter;
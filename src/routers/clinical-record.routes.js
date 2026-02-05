const express = require("express");
const { getAllClinicalRecords, createClinicalRecords, getClinicalRecordsById, updateClinicalRecords, removeClinicalRecords } = require("../controllers/clinical-record.controller");
const authenticate = require("../utils/middlewares/auth.middleware");

const clinicalRecordRouter = express.Router();
clinicalRecordRouter.route("/")
                    .get(authenticate, getAllClinicalRecords)
                    .post(authenticate, createClinicalRecords)
clinicalRecordRouter.route("/:id")
                    .get(authenticate, getClinicalRecordsById)
                    .put(authenticate, updateClinicalRecords)
                    .delete(authenticate, removeClinicalRecords)

module.exports = clinicalRecordRouter;
const express = require("express");
const { getAllClinicalNotes, createClinicalNote, getClinicalNoteById, updateClinicalNote, removeClinicalNoteById } = require("../controllers/clinical-note.controller");
const authenticate = require("../utils/middlewares/auth.middleware");

const clinicalNoteRouter = express.Router();

clinicalNoteRouter.route("/")
                  .get(authenticate, getAllClinicalNotes)
                  .post(createClinicalNote)
clinicalNoteRouter.route("/:id")
                  .get(authenticate, getClinicalNoteById)
                  .put(authenticate, updateClinicalNote)
                  .delete(authenticate, removeClinicalNoteById)


module.exports = clinicalNoteRouter;
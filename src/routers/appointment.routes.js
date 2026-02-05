const express = require("express");
const { getAllAppointments, createAppointment, getAppointmentById, updateAppointment, removeAppointmentById } = require("../controllers/appointment.controller");

const appointmentRouter = express.Router();

appointmentRouter.route("/")
                 .get(authenticate, getAllAppointments)
                 .post(authenticate, createAppointment)
appointmentRouter.route("/:id")
                 .get(authenticate, getAppointmentById)
                 .put(authenticate, updateAppointment)
                 .delete(authenticate, removeAppointmentById)

module.exports = appointmentRouter;
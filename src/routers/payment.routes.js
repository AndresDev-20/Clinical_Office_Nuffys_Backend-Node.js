const express = require("express");
const { getAllPayments, createPayment, getPaymentById, updatePayment, removePaymentById } = require("../controllers/payment.controller");
const authenticate = require("../utils/middlewares/auth.middleware");

const paymentRouter = express.Router();

paymentRouter.route("/")
             .get(authenticate, getAllPayments)
             .post(authenticate, createPayment)
paymentRouter.route("/:id")
             .get(authenticate, getPaymentById)
             .put(authenticate, updatePayment)
             .delete(authenticate, removePaymentById)

module.exports = paymentRouter;
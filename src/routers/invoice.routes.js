const express = require("express");
const { getAllInvoices, createInvoice, updateInvoice, getInvoiceById, removeInvoiceById } = require("../controllers/invoice.controller");
const authenticate = require("../utils/middlewares/auth.middleware");

const invoiceRouter = express.Router();

invoiceRouter.route("/")
             .get(authenticate, getAllInvoices)
             .post(authenticate, createInvoice)
invoiceRouter.route("/:id")
             .get(authenticate, getInvoiceById)
             .put(authenticate, updateInvoice)
             .delete(authenticate, removeInvoiceById)

module.exports = invoiceRouter;
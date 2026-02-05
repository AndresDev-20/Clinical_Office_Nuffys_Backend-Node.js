const express = require("express");
const { getInvoiceItemById, removeInvoiceItemById, getAllInvoiceItems, createInvoiceItem, updateInvoiceItem } = require("../controllers/invoice-item.controller");
const authenticate = require("../utils/middlewares/auth.middleware");

const invoiceItemRouter = express.Router();

invoiceItemRouter.route("/")
                 .get(authenticate, getAllInvoiceItems)
                 .post(authenticate, createInvoiceItem)
invoiceItemRouter.route("/:id")
                 .get(authenticate, getInvoiceItemById)
                 .put(authenticate, updateInvoiceItem)
                 .delete(authenticate, removeInvoiceItemById)

module.exports = invoiceItemRouter;
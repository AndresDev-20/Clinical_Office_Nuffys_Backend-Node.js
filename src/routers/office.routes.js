const express = require('express');
const { getAllOffices, getOneOffice, createOffice, updateOffice, removeOffice } = require('../controllers/office.controller');
const authenticate = require('../utils/middlewares/auth.middleware');

const officeRouter = express.Router();
officeRouter.route("/")
            .get(authenticate, getAllOffices)
            .post(authenticate, createOffice)
officeRouter.route("/:id")
            .get(authenticate, getOneOffice)
            .put(authenticate, updateOffice)
            .delete(authenticate, removeOffice)

module.exports = officeRouter;
const express = require("express");
const { getAllProducts, createProduct, updateProduct, removeProductById } = require("../controllers/products.controller");

const productRouter = express.Router();
productRouter.route("/")
             .get(authenticate, getAllProducts)
             .post(authenticate, createProduct)
productRouter.route("/:id")
             .get(authenticate, getAllProducts)
             .put(authenticate, updateProduct)
             .delete(authenticate, removeProductById)

module.exports = productRouter;
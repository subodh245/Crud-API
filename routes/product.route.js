const express = require("express");
const Product = require("../models/product.model");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);

// for updating the Product
router.put("/:id", updateProduct);

// for deleting the product
router.delete("/:id", deleteProduct);

module.exports = router;

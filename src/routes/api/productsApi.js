const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsAPIController");

//ruta para la cantidad de productos
router.get("/", productsApiController.list);

//ruta para la cantidad de categorias
router.get("/category", productsApiController.category);

module.exports = router;

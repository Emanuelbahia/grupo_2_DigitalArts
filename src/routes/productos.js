const express = require("express");
const path = require("path");
const productosController = require("../controllers/productosController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/products/"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + " - " + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

/* ruta categoria de cuadros */
router.get("/products/:category", productosController.cuadros);

/* ruta detalle de producto */
router.get("/products/detail/:id", productosController.detail);

/* ruta de crear un producto */
router.get("/products", productosController.formCreate);
router.post(
  "/products/create",
  upload.single("image"),
  productosController.create
);

/* ruta de editar un producto */
router.get("/products/edit/:id", productosController.formEdit);
router.put("/products/edit/:id", productosController.edit);

/* ruta de eliminar un producto */
router.delete("/products/delete/:id", productosController.delete);

module.exports = router;

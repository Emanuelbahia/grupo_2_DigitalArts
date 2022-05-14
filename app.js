const express = require("express");
const app = express();
const path = require("path");
const { ppid } = require("process");
const port = 3000;

app.use(express.static(__dirname + "/public"));

const views = path.join(__dirname, "views/");

app.get("/", function (req, res) {
  res.sendFile(path.join(views, "index.html"));
});

app.get("/cuadros_decorativos.html", function (req, res) {
  res.sendFile(path.join(views, "cuadros_decorativos.html"));
});

app.get("/categoria.html", function (req, res) {
  res.sendFile(path.join(views, "categoria.html"));
});

app.get("/login.html", function (req, res) {
  res.sendFile(path.join(views, "login.html"));
});
app.get("/registro_de_artistas.html", function (req, res) {
  res.sendFile(path.join(views, "registro_de_artistas.html"));
});

app.get("/abstracto_espatula.html", function (req, res) {
  res.sendFile(path.join(views, "abstracto_espatula.html"));
});

app.get("/abstracto_pincel.html", function (req, res) {
  res.sendFile(path.join(views, "abstracto_pincel.html"));
});

app.get("/cuadros_artistas_nuevos.html", function (req, res) {
  res.sendFile(path.join(views, "cuadros_artistas_nuevos.html"));
});

app.get("/fotomontaje.html", function (req, res) {
  res.sendFile(path.join(views, "fotomontaje.html"));
});

app.get("/pouring.html", function (req, res) {
  res.sendFile(path.join(views, "pouring.html"));
});

app.get("/register.html", function (req, res) {
  res.sendFile(path.join(views, "register.html"));
  
app.get("/carrito.html", function (req, res) {
  res.sendFile(path.join(views, "carrito.html"));
});

app.listen(port, () => {
  console.log("hola mundo");
});

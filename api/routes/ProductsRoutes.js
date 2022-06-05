const express = require("express");
const routes = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  getProducts,
  PostProducts,
  uplaodSingleFile,
  deleteProducts,
  updateProduct,
  userLogin,
} = require("../controllers/ProductsController");
const { loginUser, getMe } = require("../controllers/UserController");

// routes.post("/api/products/", uplaodSingleFile, PostProducts);
routes.get("/api/products/", getProducts);
routes.delete("/api/products/delete/:id", deleteProducts);
routes.put("/api/products/update/:id", updateProduct);
// routes.post("/api/products/login", userLogin); old one
routes.post("/api/user/login", loginUser);
routes.get("/api/me", protect, getMe);

routes.get("/api/user/show/", protect, (req, res) => {
  res.send("show all users");
});

module.exports = routes;

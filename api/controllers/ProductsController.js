const multer = require("multer");
const path = require("path");

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const db = require("../config/Db");

// const storage = multer.diskStorage({
//   destination: "upload",
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10000000,
//   },
// });

// app.use(cors());
// app.use("/profile", express.static("../upload"));

// exports.uplaodSingleFile = upload.single("profile");
// exports.PostProducts = (req, res) => {
//   const profile_url = `http://localhost:5000/profile/${req.file.filename}`;
//   const { name, company, price, memory, color, link, description } = req.body;
//   db.query(
//     `INSERT INTO products(image,name,company,price,memory,color,link,description) VALUE(?,?,?,?,?,?,?,?)`,
//     [profile_url, name, company, price, memory, color, link, description],
//     (err) => {
//       err ? console.log(err) : console.log("data inserted");
//     }
//   );

//   //   res.json({
//   //     success: 1,
//   //     profile_url: `http://localhost:4000/profile/${req.file.filename}`,
//   //   });
// };
// function errHandler(err, req, res, next) {
//   if (err instanceof multer.MulterError) {
//     res.json({
//       success: 0,
//       message: err.message,
//     });
//   }
// }
// app.use(errHandler);

// get all products

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    err ? console.log(err) : res.send(result);
  });
};

// delete product
exports.deleteProducts = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM products where id=?", id, (err, result) => {
    err ? console.log(err) : res.send("products delete with id " + id);
  });
};

// update products
exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, company, price, memory, color, link, description } = req.body;
  // const profile_url = `http://localhost:5000/profile/${req.file.filename}`;

  db.query(
    "UPDATE products  SET name=?,company=?,price=?,memory=?,color=?,link=?,description=?  where id=?",
    [name, company, price, memory, color, link, description, id],
    (err) => {
      err ? console.log(err) : console.log("data Updated" + link);
    }
  );
};

exports.userLogin = (req, res) => {
  const { name, password } = req.body;
  db.query(
    `SELECT * FROM user_login WHERE name='${name}' AND password='${password}'`,
    (err, result) => {
      err ? console.log(err) : res.send(result);
    }
  );
};

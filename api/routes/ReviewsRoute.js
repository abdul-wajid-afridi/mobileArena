const express = require("express");
const route = express.Router();
const db = require("../config/Db");
const protect = require("../middlewares/authMiddleware");

route.get("/api/reviews/", (req, res) => {
  db.query("SELECT * FROM reveives", (err, result) => {
    err ? console.log(err) : res.send(result);
  });
});

route.post("/api/reviews/", (req, res) => {
  const { name, email, description } = req.body;

  db.query(
    "INSERT INTO reveives(name,email,description) VALUES(?,?,?)",
    [name, email, description],
    (err) => {
      err ? console.log(err) : res.send("data inserted successfully");
    }
  );
});

route.delete("/api/reviews/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM reveives where id=?", id, (err) => {
    err ? console.log(err) : res.send("data deleted succesfully");
  });
});
route.delete("/api/reviews/show", (req, res) => {
  res.send("show reviews");
});

// route.put("/api/reviews/update/:id", (req, res) => {
//   const id = req.params.id;
//   const { name, email, description } = req.body;
//   db.query(
//     "UPDATE reveives SET name=?,email=?,description=? WHERE id=? ",
//     [name, email, description, id],
//     (err) => {
//       err ? console.log(err) : res.send("data updated succesfully");
//     }
//   );
// });

module.exports = route;

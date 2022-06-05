const db = require("../config/Db");

const getHearts = (req, res) => {
  const id = req.params.id;
  db.query(
    `SELECT hearted from hearts
      JOIN products
      ON products.id=hearts.product_id
      where products.id=${id}
      `,
    (err, data) => {
      err
        ? res.json({
            status: "failed",
            err,
          })
        : res.json({
            status: "success",
            data,
          });
    }
  );
};

const postHearts = (req, res) => {
  const id = req.params.id;
  const { hearted } = req.body;
  db.query(
    "insert into hearts(hearted,product_id) value(?,?)",
    [hearted, id],
    (err) => {
      err
        ? res.json({ status: err })
        : res.json({
            status: "success",
          });
    }
  );
};

module.exports = {
  getHearts,
  postHearts,
};
